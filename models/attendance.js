var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var attendance = new Schema({
    username: [{type:ObjectId, ref: 'User', default: null}],
    date: [{type: Date, default:new Date().toJSON().slice(0,10)}],
    breakfast: [{type: Boolean, default:false}],
    lunch: [{type: Boolean, default:false}],
    dinner: [{type: Boolean, default:false}]
});

module.exports = mongoose.model('Attendance', attendance);