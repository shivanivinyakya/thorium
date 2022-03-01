const mongoose =require('mongoose');

const authorSchema =new mongoose.Schema({
    author_id :{
        require :true,
        type : String,
    },
    author_name :String,
    age : Number,
    address: String
})
module.exports =mongoose.model('Authors',authorSchema)