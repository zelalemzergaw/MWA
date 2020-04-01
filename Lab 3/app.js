const https = require('https');
const fs = require('fs');

const server = https.createServer({
    cert: fs.readFileSync('./certificate.crt'),
    key : fs.readFileSync('./privateKey.key')
});

server.on('request', (req, res) => {
    let url = req.url;
    let metho = req.method;

    if(url === "/"){
        res.writeHead(200, { 'content-type': 'text/html' });
  
        let htmlFile = fs.readFileSync(__dirname+"/des.html","utf8");

        res.end(htmlFile);
    }
    if( url === "/acc" && metho === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            
        });
       
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        return res.end('Done');
    }

});

server.listen(3000);