const Database = require('./database');
const State = {
    Activities: [],
    Configs: {},
    Contacts: []
};
module.exports = {
    SuperUsers() {
        const Users = [{
                UserId: 10001,
                Username: 'ttvone',
                Password: '1234'
            },
            {
                UserId: 10002,
                Username: 'wanchaloem',
                Password: '1234'
            }
        ];
        return Users;
    },
    Activities(findObject = {}) {
        return Database.Activity
            .find(findObject)
            .sort({ updated: -1 })
            .then(Activities => State['Activities'] = Activities);
    },
    Configs() {
        return Database.Config
            .findOne()
            .then(Configs => State['Configs'] = Configs);;
    },
    Contacts(findObject = {}) {
        return Database.Message.find(findObject).sort({ updated: -1 });
    },
    State: State
}