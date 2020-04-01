//product router class
const express = require('express');
const path = require('path');
 const options = {
      "caseSensitive": false,
       "strict": false
     }; 
const routerProduct = express.Router(options);

routerProduct.get('/products', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname,'..','views', 'product.html'));

    });


    routerProduct.post('/products', (req, res, next) => { 
    console.log(req.body);
     res.redirect('/');
     });

module.exports = routerProduct;