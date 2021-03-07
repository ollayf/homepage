var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var chores_done = new Schema({
    user: [{type:ObjectId, ref: 'User', default: null}],
    date: [{type: Date, default:new Date().toJSON()}],
    chore: [{type: ObjectId, ref: 'Chore'}]
});

module.exports = mongoose.model('Chore_Done', chores_done);