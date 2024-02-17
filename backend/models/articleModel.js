const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleShema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:'draft',
    },
    authorName:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

exports.Articles = mongoose.model('Article',articleShema)