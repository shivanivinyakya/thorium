const { count } = require("console")
const { resourceLimits } = require("worker_threads")
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel =require("../models/newPublisherModel")
const newBook=require("../models/newBook")



const createAuthor= async function (req, res) {
    let newAuthor= req.body
    let newAuthorCreated = await newAuthorModel.create(newAuthor)
    res.send({data: newAuthorCreated})
}

const createPublisher= async function (req, res) {
    let Publisher = req.body
    let publisherCreated = await newPublisherModel.create(Publisher)
    res.send({data: publisherCreated})
}
const newBooks= async function (req, res) {
    let Book = req.body
    let BookCreated = await newBook.create(Book)
    res.send({data: BookCreated})
}

const createBook = async function(req,res){
    let book = req.body
      if (book.author){
        if(book.publisher){
        publisher_id=book.publisher
        author_id=book.author
        const valid1= await newAuthor.find({_id:author_id})
        const valid2= await newPublisher.find({_id:publisher_id})
        if(valid1.length==0)
        {
            res.send("author is not presnt")
        }
    }
        if(valid2.length==0)
        {
            res.send("publisher is not present")
        }
        let bookCreated =await newBook.create(book)
        res.send("Publisher is present")
    }
    res.send("Author is present")
    }
    
    const getBooks= async function (req, res) {
        let books = await newBook.find().populate( "Author_id")
        res.send({data: books})
    }



module.exports.createAuthor= createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook=createBook
module.exports.getBooks=getBooks
module.exports.newBooks=newBooks

























// const createPublisher= async function (req, res) {
//     let newPublisher =req.body
//     let newPublisherCreated = await newPublisherModel.create(newPublisher)
//     res.send({data: newPublisherCreated})