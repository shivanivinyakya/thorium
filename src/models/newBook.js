const mongoose = require('mongoose');


const newBooksSchema = new mongoose.Schema( {
    name: String,
    price:Number,
    ratings:Number

}, { timestamps: true });

module.exports = mongoose.model('newBooks', newBooksSchema)