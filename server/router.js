const Router = require('express').Router();
const Database = require('./database');
const Url = require('../src/Url.json');
const Store = require('./store');
const Security = require('./security');

// Login authentication
Router.post(Url.Login, (req, res) => {
    let searchUsers = Store.SuperUsers().filter(m =>
        m.Username == req.body.Username &&
        m.Password == req.body.Password
    );
    if (searchUsers.length > 0) {
        return res.status(200).send({
            message: 'Authentication complete.',
            token: Security.encrypt(searchUsers[0].UserId)
        });
    }
    return res.status(400).send({ message: 'Username or Password is incorrect.' });
});


module.exports = Router;