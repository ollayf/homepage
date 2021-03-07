var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var user = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    helper: [{type: Boolean, default: 0}],
});

module.exports = mongoose.model('User', user);