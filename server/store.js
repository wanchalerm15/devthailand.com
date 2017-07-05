const database = require('./database');
module.exports = {
    countUser() {
        return new Promise((resolve, reject) => {
            database.userCollection.count()
                .catch(reject)
                .then(resolve);
        });
    },
    getCategories() {
        return new Promise((resolve, reject) => {
            database.categoryCollection.find()
                .then(resolve)
                .catch(reject);
        });
    }
};