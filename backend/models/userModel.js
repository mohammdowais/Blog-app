const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    likedArticles:{
        type:[Schema.Types.ObjectId],
        ref:'Article'
    },
    writtenArticles:{
        type:Schema.Types.ObjectId,
        ref:'Article'
    }
},{timestamps:true})

exports.Users = mongoose.model("User",userSchema)