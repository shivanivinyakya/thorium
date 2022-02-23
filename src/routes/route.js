const express = require('express');
const router = express.Router();

let players=[


{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ],
    "bookings": [
    ]
 },
    

 {
        "name": "Harish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ],
        "bookings": [
        ]
},

 {
            "name": "Prakash",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
            "swimming"
            ],
            "bookings": [
            ]
  },

  {
                "name": "Pritesh",
                "dob": "1/1/1995",
                "gender": "male",
                "city": "jalandhar",
                "sports": [
                "swimming"
                ],
                "bookings": [
                ]
  }
        ] 
        let a = players.length;

        // Part 1 ==> Add new player.
        
        router.post('/players',function(req,res){
            
            let element = req.body.nplayer.name;
            let element1 = req.body.nplayer
            for (let i=0;i<a;i++){
                if(element === players[i].name ){
                    console.log(element)
                    res.send("player already exists")
                    
                   
                }
               else if (i === a-1){
        
                    players.push(element1)
                    res.send({data :players , status : true})
                   
                }
              
            }
           
             
        
        
        
        })
        
         module.exports = router;