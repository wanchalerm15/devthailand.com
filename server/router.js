const Router = require('express').Router();
const Database = require('./database');
const Url = require('../src/Url.json');
const SuperUsers = [{
        Username: 'ttvone',
        Password: 'ttvone1234'
    },
    {
        Username: 'wanchaloem',
        Password: '1234'
    }
];

Router.post(Url.Login, (req, res) => {
    let searchUsers = SuperUsers.filter(m => m.Username == req.body.Username && m.Password == req.body.Password);
    if (searchUsers.length > 0)
        return res.status(200).send({ message: 'Authentication complete.' });
    return res.status(400).send({ message: 'Username or Password is incorrect.' });
});


module.exports = Router;