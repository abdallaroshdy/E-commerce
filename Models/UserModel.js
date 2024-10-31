const mongoose =require('mongoose')

const Schema = mongoose.Schema({
    
    name : {
        type : String,
        require : [true , "name is required"]
    },
    email : {
        type : String,
        unique : true,
        require : [true , "email is required"]
    },
    password : {
        type : String,
        require : [true , "password is required"]
    },
    phoneNum : {
        type : String,
        unique : true,
        require : [true , "phoneNum is required"]
    },
    gender : {
        type : String,
        enum : ['Male' , 'Femal'],
        require : [true , "gender is required"]
    }
})


module.exports = mongoose.model("User" , Schema)