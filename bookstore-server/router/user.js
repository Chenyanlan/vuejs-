var express = require('express')
var router = express.Router()

// var users = [
//     {name:'user1',pass:'111'},
//     {name:'user2',pass:'222'}
// ]

var User = require('../models/user')

router.route('/validate').post((req,res)=>{
    User.findOne({
        name:req.body.name,
        pass:req.body.pass
    },(err,user)=>{
        if(err){
            console.log(err)
        }
        res.json(user)
    })
   
})

router.route('/register').post((req,res)=>{
    console.log(req.body) 
    myname = req.body.name
    mypass = req.body.pass
    mynick = ''
    var user2 = {
      name:myname,
      pass:mypass,
      nickName:mynick
    }
    console.log(user2)
    User.create(user2,(err,user2)=>{
      if(err){
        console.log(err)
      }
      res.json(user2)
    })
  })

module.exports = router