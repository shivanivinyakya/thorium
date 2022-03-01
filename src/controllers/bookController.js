const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
//part1
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//part2
const createNewAuthor =async function(req,res){
    const reqAuthor =req.body;
    const savedData =await authorModel.create(reqAuthor)
    res.send({msg: savedData})
}
//part3
const allBook =async function(req,res){
    const authorDetail =await authorModel.find ({author_name: "Chetan Bhagat"})
    const id =authorDetail[0].author_id
    console.log(id)
    const booksName = await BookModel.find({author_id}).select({name:1})
     console.log(booksName)
    res.send({msg : booksName})
    
}
//part 4
const updatedBooksPrice =async function (req,res){
    const bookDetails =await authorModel.find({name :"Two states"})
    const id =bookDetails[0].author_id
    const authorN =await authorModel.find({author_id:id}).select({author_name:1,_id:0})

    const bookName =bookDetails[0].name
    const updatedPrice =await BookModel.findOneAndUpdate({name:bookName},{price:100},{new:true}).select({price:1,_id:0})
    
    res.send ({msg:authorN,updatedPrice})


}
//part 5
  const authorsName =async function(req,res){
      const bookId =await BookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1,_id:0})
      const id =bookId.map(inp => inp.author_id)
      let temp =[]
      for (let i=0;i<id.length;i++){
          let x =id[i]
          const author =await authorModel.find({author_id:x}).select({author_name:1,_id:0})
          temp.push(author)
      }
      const authorName =temp.flat()
      res.send({msg:authorName})
  }

 
  module.exports.createBook =createBook
  module.exports.createNewAuthor=createNewAuthor
  module.exports.authorsName =authorsName
  module.exports.allBook=allBook
  module.exports.updatedBooksPrice=updatedBooksPrice













// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }

// //part 5

// const updateBooks= async function (req, res) {
   
    
    
    
    
    
    
    
    
    
    
    
//     //let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
