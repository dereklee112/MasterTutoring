const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cookieScheme = new Schema({
    userName: String,
    cookieValue: String,
    createdAt: {type: Date, expires: '1d', default: Date.now }
})

const Cookie = mongoose.model('Cookie', cookieScheme);

module.exports = Cookie;