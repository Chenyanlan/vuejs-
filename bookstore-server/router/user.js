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

module.exports = router