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
    res.send(model);
});

module.exports = router;