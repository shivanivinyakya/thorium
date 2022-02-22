const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/movies',function(req,res){
    res.send(["jab we met","Harry met sally ","PushpaTheRise","A Thursday","Money Heist"])
  })
 
 
 
  router.get('/movies/:moviesID',function(req,res){
      movie=["jab we met","Harry met sally","PushpaTheRise","A Thursday","Money Heist"]
      let value = req.params.moviesID;
      if(value>movie.length-1){
             res.send("Movie Not Find Here")
      }else{
        res.send(movie[value])
      }
  });


module.exports = router;
