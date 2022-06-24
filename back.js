const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const login = fs.readFileSync('./login.html');
const price = fs.readFileSync('./price.html');
const healthCorner = fs.readFileSync('./healthCorner.html');
// const home = fs.readFileSync('index.html');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.setHeader('content-Type' , 'text/html');
    if(url == '/')
    {
        res.end(home);
    }
    else if(url == '/login')
    {
        res.end(login);
    }
    else if(url == '/price')
    {
        res.end(price);
    }
    else if(url == '/healthCorner')
    {
        res.end(healthCorner);
    }
    else
    {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }
});

server.listen(port , hostname , () =>{
    console.log(`running at http://${hostname}:${port}/`);
});