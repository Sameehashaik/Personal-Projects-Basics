const mongoose = require('mongoose')
const schema = mongoose.Schema

var tableSchema = new schema({
    name:{
        type: String, 
        required: true
    },
    Articels:{
        type: String,
        required: true
    }
})
const Table = mongoose.model('Table', tableSchema)
module.exports = Table 