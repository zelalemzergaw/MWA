const http = require('http');
const fs = require('fs');


const server = http.createServer();

server.listen(3000,function(){
    console.log('server starts on port 3000 ....');
});
