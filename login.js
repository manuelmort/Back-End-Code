var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var sql = require('mysql');
var fs = require('fs');
var url = require('url')


const data = fs.readFileSync(`${__dirname}/login.html`,'utf-8');
const CSSdata = fs.readFileSync(`${__dirname}/art.css`, 'utf-8');


var insert = "INSERT INTO mysampletable (username, password) VALUES ('manuelmort', 'manuel09')";




let practiceServer = http.createServer(function(req,res) {
    res.statusCode = 200;
    res.setHeader(200, {'Content-Type' :'text/plain'});
    res.end('Hello World');
}).listen(3000);

const server = http.createServer((req,res) => {
    var pathName = req.url;
    
    if (pathName ==='/' || pathName === '/login') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);

    } else {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("No Page Found");
    }
    res.end();
}).listen(9000);

console.log(__dirname);



//im just creating a webserver here just to make sure i get things down in my brain


// tommoroww review this code and try to retype everthing/
//try learning how to link the html and css page to web server and database 
// end goal: get login form to link with 