const database = require('./database');
module.exports = {
    countUser() {
        return new Promise((resolve, reject) => {
            database.userCollection.count()
                .catch(reject)
                .then(resolve);
        });
    }
};