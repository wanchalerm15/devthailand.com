const mongoose = require('mongoose');
mongoose.Promise = Promise;
const database = mongoose.createConnection('mongodb://localhost/devthailand');

const ActivitySchema = mongoose.Schema({
    topic: { type: String, required: true },
    body: { type: String, required: true },
    image: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = {
    Activity: database.model('activities', ActivitySchema)
};