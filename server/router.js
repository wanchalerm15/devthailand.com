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

// Activity 
Router.get(Url.Admin.Activity, (req, res) => {
    Store.Activities()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});
Router.post(Url.Admin.Activity, (req, res) => {
    new Database.Activity(req.body)
        .save()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});
Router.put(`${Url.Admin.Activity}/:id`, (req, res) => {
    const id = req.params['id'] || 0;
    req.body.updated = new Date();
    Database.Activity
        .findByIdAndUpdate(id, req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});
Router.delete(`${Url.Admin.Activity}/:id`, (req, res) => {
    const id = req.params['id'] || 0;
    Database.Activity
        .findByIdAndRemove(id)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});
module.exports = Router;