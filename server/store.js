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
    },
    getVideos() {
        return new Promise((resolve, reject) => {
            database.videoCollection
                .aggregate([
                    {
                        $lookup: {
                            from: "categories",
                            localField: "category_id",
                            foreignField: "_id",
                            as: "category"
                        }
                    },
                    { $unwind: "$category" }
                ])
                .then(resolve)
                .catch(reject);
        });
    }
};