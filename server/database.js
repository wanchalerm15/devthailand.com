const mongoose = require('mongoose');
mongoose.Promise = Promise;
const database = mongoose.createConnection('mongodb://localhost/devthailand');

const ActivitySchema = mongoose.Schema({
    topic: { type: String, required: true },
    body: { type: String, required: true },
    image: { type: String },
    type: { type: Number, required: true }, // 1 work, 2 portfolio
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
}, { versionKey: false });

const ConfigSchema = mongoose.Schema({
    address: { type: String },
    email: { type: String },
    phone: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = {
    Activity: database.model('activities', ActivitySchema),
    Config: database.model('configs', ConfigSchema)
};