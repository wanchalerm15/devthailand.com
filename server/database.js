const mongoose = require('mongoose');
const security = require('./security');
const Url = require('../src/url.json');
const address = Url.DatabaseUrl;;
const database = mongoose.createConnection(address);
const ObjectId = mongoose.Schema.ObjectId;
mongoose.Promise = global.Promise;
// For User Collection
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
userSchema.pre('save', function(next) {
    this.password = security.hash(this.password);
    next();
});
const userCollection = database.model('Users', userSchema);

// For Category collection
const categorySchema = mongoose.Schema({
    category_name: { type: String, required: true },
    category_detail: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const categoryCollection = database.model('categories', categorySchema);

// For Videos collection
const videoSchema = mongoose.Schema({
    video_name: { type: String, required: true },
    video_url: { type: String, required: true },
    video_detail: { type: String },
    video_active: { type: Boolean, default: false },
    video_count_view: { type: Number, default: 0 },
    category_id: { type: ObjectId, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const videoCollection = database.model('videos', videoSchema);

module.exports = {
    database,
    security,
    ObjectId,
    userCollection,
    categoryCollection,
    videoCollection
};