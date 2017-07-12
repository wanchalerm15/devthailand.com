const mongoose = require('mongoose');
const database = mongoose.createConnection('mongodb://localhost/devthailand');

const WorkSchema = mongoose.Schema({
    topic: { type: String, required: true },
    body: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

module.exports = {
    Works: database.model('works', WorkSchema)
};