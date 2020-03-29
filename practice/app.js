const express = require('express');
// const bodyParser= require('body-parser');

const fs =require('fs');

const app= express();
const adminRouter=require('./route/admin');


//app.enable('case sensetive routing');
app.use(express.urlencoded({extended:true}));
app.use(adminRouter);

// app.all('/all',(req,res,next)=>{
// res.send('this page is all... ');
// });
app.listen(3000,function(){
    console.log('server start running on port number 3000..... ');
})
