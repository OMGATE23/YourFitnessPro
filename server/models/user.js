const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true , 'EMail is required for registering!'],
        unique : [true , "Email already in use"]
    },
    name : {
        type : String,
        required : [true , "Name is a required field!"]
    },
    weight : {
        type : Number,
        required : [true , "Enter weight for calculations"]
    },
    height : {
        type : Number,
        required : [true , "Enter height for calculations"]
    },
    age : {
        type : Number,
        required : [true , "Enter age for calculations"]
    },
    password : {
        type : String,
        required : [true , "Password is neccessary to register"],
        minlength : [6 , "Password must be atleast 6 characters"]
    } ,

    created_splits : {
        type :Array
    },

    createdAt : {
        type : Date,
        default : new Date(Date.now())
    }
})

module.exports = mongoose.model('User' , userSchema)