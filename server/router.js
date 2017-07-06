const router = require('express').Router();
const store = require('./store');
const database = require('./database');
const authenticated = require('./authen');
const Url = require('../src/url.json');

// router check authen
router.get(Url.Authen, authenticated, (req, res) => {
    let authen = database.security.crypto.JWTEncrypt(req.User._id);
    res.send({ authen });
});

// check countUser
router.get(Url.CountUser, (req, res) => {
    store.countUser().then(count => res.send({ count }));
});

// register first
router.post(Url.Register, (req, res) => {
    let model = new database.userCollection(req.body);
    model.save((err, data) => {
        if (err)
            return res.status(400).send({ message: err.message });
        res.send({ message: 'success', data });
    });
});
// login route
router.post(Url.Login, (req, response) => {
    const email = req.body.email || null;
    const password = req.body.password || null;
    // connect database
    database.userCollection.findOne({ email })
        .then(res => {
            if (res && database.security.validate(res.password, password))
                return response.send({
                    message: 'Login successful.',
                    authen: database.security.crypto.JWTEncrypt(res._id)
                });
            response.status(400).send({ message: 'Email or password incorrect.' });
        })
        .catch(res => response.status(500).send(res));
});

// category route GET
router.get(Url.Admin.Category, (req, response) => {
    store.getCategories()
        .then(res => response.send(res))
        .catch(res => response.status(500).send(res));
});
// category route POST
router.post(Url.Admin.Category, (req, response) => {
    const category = new database.categoryCollection(req.body);
    category.save((err, res) => {
        if (err) return response.status(400).send(err);
        response.send(res);
    });
});
// category router PUT
router.put(`${Url.Admin.Category}/:id`, (req, response) => {
    const id = req.params['id'] || '0';
    database.categoryCollection
        .findByIdAndUpdate(id, req.body)
        .then(res => response.send(res))
        .catch(res => response.status(500).send(res));
});
// category router DELETE
router.delete(`${Url.Admin.Category}/:id`, (req, response) => {
    const id = req.params['id'] || '0';
    database.categoryCollection.findByIdAndRemove(id)
        .then(res => response.send(res))
        .catch(res => response.status(500).send(res))
});

module.exports = router;