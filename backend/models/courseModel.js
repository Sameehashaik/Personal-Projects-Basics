const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    name:{type: String, required: true},
    isdelete:{type:Boolean. requied: true}
}
module.exports = mongoose.model('Task', courseSchema)