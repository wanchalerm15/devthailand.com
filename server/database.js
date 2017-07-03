const mongoose = require('mongoose');
const security = require('./security');
const address = 'mongodb://localhost/devthailand';
const database = mongoose.createConnection(address);
mongoose.Promise = global.Promise;

// Begin    For User Collection
const userSchema = mongoose.Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
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
// End      For User Collection

module.exports = {
    database,
    userCollection
};