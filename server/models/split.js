const mongoose = require('mongoose')

const splitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'A training split must have a name']
    },
    user_id : {
        type : String,
        required : [true , "User id required"]
    },
    exercises : {
        type : Array
    }
})

module.exports = mongoose.model('Split' , splitSchema)