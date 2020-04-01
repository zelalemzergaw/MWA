//app.js 
const express = require('express');
const routerUser = require('./routes/user');
const routerProduct = require('./routes/product');
const path = require('path');
const bodyParse = require('body-parser');


const app = express();
app.use(bodyParse.urlencoded());
app.use(routerUser);
app.use(routerProduct);
app.use(express.static(path.join(__dirname, 'static'))); 

app.get('/',(req,res)=>{
    res.send("Front Page!!!");
});

app.get('/error',(req, res) => {
     res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
    });


app.listen(8080,()=>{
    console.log("server start on port 8080...");
});