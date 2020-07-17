const mongoose = require('mongoose');
const { v4: v4 } = require('uuid');

const userSchema = new mongoose.Schema({
    id: { type: String, default: v4},
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String
});

module.exports = mongoose.model('User', userSchema);