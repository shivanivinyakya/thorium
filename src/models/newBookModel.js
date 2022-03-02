const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    Author_id: {
        type: ObjectId,
        ref: "Author"
    },
    name: String,
    price: Number,
    ratings: Number,
    Publishers_id:{
        type: ObjectId,
        ref:"Author"
    }


}, { timestamps: true });
module.exports = mongoose.model('newBook', bookSchema)
