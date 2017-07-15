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
    // address
    address: { type: String },
    email: { type: String },
    phone: { type: String },
    // social
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    google_plus: { type: String },
    // index page
    welcome_logo: { type: String },
    welcome_head: { type: String },
    welcome_detail: { type: String },
    // about page
    about_head: { type: String },
    about_detail: { type: String },
    about_content: { type: String },
    // default datetime
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = {
    Activity: database.model('activities', ActivitySchema),
    Config: database.model('configs', ConfigSchema)
};