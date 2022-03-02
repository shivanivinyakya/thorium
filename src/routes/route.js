const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")
//const AuthorModel =require("../controllers/bookController")
//const publisherController=require("../controllers/bookController")

router.post("/createAuthor", bookController.createAuthor)
router.post("/createBook", bookController.createBook)
router.get("/createPublisher", bookController.createPublisher)
router.get("/getBooks",bookController.getBooks)
router.post("/newBooks",bookController.newBooks)

module.exports = router;