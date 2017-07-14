const Database = require('./database');
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
        return Database.Activity.find(findObject).sort({ updated: -1 });
    },
    Configs() {
        return Database.Config.findOne();
    }
}