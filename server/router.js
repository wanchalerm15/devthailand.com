const router = require('express').Router();
const store = require('./store');
const database = require('./database');

// check countUser
router.get('/countUser', (req, res) => {
    store.countUser().then(count => {
        res.send({ count });
    });
});

// register first
router.post('/register', (req, res) => {
    let model = new database.userCollection(req.body);
    model.save((err, data) => {
        if (err)
            return res.status(400).send({ message: err.message });
        res.send({ message: 'success', data });
    });
});

module.exports = router;