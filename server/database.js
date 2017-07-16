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
    about_title: { type: String },
    about_content: { type: String },
    // portfolio content
    portfolio_title: { type: String },
    portfolio_detail: { type: String },
    // contact content
    contact_title: { type: String },
    contact_detail: { type: String },
    // activities
    activity_image1: { type: String },
    activity_title1: { type: String },
    activity_detail1: { type: String },

    activity_image2: { type: String },
    activity_title2: { type: String },
    activity_detail2: { type: String },

    activity_image3: { type: String },
    activity_title3: { type: String },
    activity_detail3: { type: String },
    // default datetime
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

const messageSchema = mongoose.Schema({
    message_name: { type: String, required: true },
    message_email: { type: String, required: true },
    message_content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = {
    Activity: database.model('activities', ActivitySchema),
    Config: database.model('configs', ConfigSchema),
    Message: database.model('messages', messageSchema)
};