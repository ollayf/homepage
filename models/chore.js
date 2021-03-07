var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var chore = new Schema({
    name: String,
    description: [{type:String, default:null}],
    bounty: [{type:Number, default: 1}],
    added_by: [{type:ObjectId, default:null, ref: 'User'}],
    min_days: [{type: Number, default: 1}],
    max_days: [{type: Number, default: 7}]
});

module.exports = mongoose.model('Chore', chore);