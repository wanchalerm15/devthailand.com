const mongoose = require('mongoose');
const security = require('./security');
const address = 'mongodb://localhost/devthailand';
const database = mongoose.createConnection(address);
mongoose.Promise = global.Promise;

// For User Collection
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    created: { type: Date },
    updated: { type: Date }
});
userSchema.pre('save', function(next) {
    this.password = security.hash(this.password);
    this.created = new Date();
    this.updated = new Date();
    next();
});
const userCollection = database.model('Users', userSchema);

// For Category collection
const categorySchema = mongoose.Schema({
    category_name: { type: String, required: true },
    category_detail: { type: String }
});
const categoryCollection = database.model('categories', categorySchema);

module.exports = {
    database,
    security,
    userCollection,
    categoryCollection
};