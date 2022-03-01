const express = require('express');
const router = express.Router();
const x =require("../controllers/bookController")


router.post("/createBook",x.createBook)
router.post("/createNewAuthor",x.createNewAuthor)
router.get("/authorsName",x.authorsName)
router.get("/allBook",x.allBook)
router.post("/updatedBooksPrice",x.updatedBooksPrice)

module.exports = router;
























 // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)
    //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {

    // res.send({ msg: "all good"})