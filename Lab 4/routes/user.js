//user router class
const express = require('express');
const path = require('path');

 const options = {
      "caseSensitive": false,
       "strict": false
     }; 
const routerUser = express.Router(options);

routerUser.get('/users', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname,'..','views', 'user.html'));

    });


    routerUser.post('/users', (req, res, next) => { 
    console.log(req.body);
     res.redirect('/');
     });

module.exports = routerUser;