const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Exercise must have name']
    },

    exercise_id : {
        type : String,
        required : [true , "Exercise ID is neccessary"]
    },  

    no_of_sets : {
        type : Number
    },

    no_of_reps : {
        type : Number
    },

    time_given : {
        type : Number
    },

    split_id : {
        type : String,
        required : [true , 'Split ID not mentioned']
    }

})

module.exports = mongoose.model('Exercise' , exerciseSchema)