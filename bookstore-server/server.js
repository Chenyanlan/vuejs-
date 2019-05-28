var express = require('express')
var app = new express()
var router = require('./router/user')
var url = "mongodb://localhost:27017/bookstore"
var mogoose = require('mongoose')
bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// 以下是之前的路由配置代码

app.use('/users',router)
app.use('/todos',require('./router/router'))
//连接数据库
mogoose.connect(url,{useNewUrlParser:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('db connect success')
    }
})
// app.post('/validate',(req,res)=>{
//     console.log(req.body)
//     res.send(users)
// })

app.listen(3000,()=>{
    console.log('app is listening on port:3000')
})