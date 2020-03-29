const express = require('express');
const fs= require('fs');
const path =require('path');
const router =express.Router();

router.get('/product',(req,res,next)=>{
    fs.createReadStream(path.join(__dirname,'..','index.html')).pipe(res);
//res.send('case sensetive check ....');
});
router.post('/add-product',(req,res,next)=>{

console.log(req.body);
console.log('save product');
res.send('success fully aded');
});

module.exports=router;
