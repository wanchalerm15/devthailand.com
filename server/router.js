const router = require('express').Router();
const store = require('./store');
const database = require('./database');
const Url = require('../src/url.json');

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
                    authen: database.security.crypto.Encrypt(res.email)
                });
            response.status(400).send({ message: 'Email or password incorrect.' });
        })
        .catch(res => response.status(500).send(res));
});

module.exports = router;