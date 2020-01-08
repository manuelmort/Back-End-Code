const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const url = require('url');
const pages = require('html-pages');
const bodyParser = require('body-parser');

const css = fs.readFileSync(`${__dirname}/public/art.css`, 'utf-8');
const htmlLogin = fs.readFileSync(`${__dirname}/login.html`, 'utf-8');
const htmlSignUp = fs.readFileSync(`${__dirname}/signup.html`, 'utf-8');
const homePage = fs.readFileSync(`${__dirname}/home.html`, 'utf-8');
const sql = require('mysql');


const myDB = sql.createConnection({
    //properties...
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myDB'
    });



//review this piece of middleware (helps parse the data given)
app.use(bodyParser.urlencoded({extended: false}));

//static files for login which is including css file attached
app.use('/login', express.static('./public'));

//
app.get('/login', function(req,res,next) {
    res.writeHead(200, {'Content-Type' :'text/html'});
    res.write(htmlLogin);
    next();
}).listen(3000);

app.get("/signup", function(req,res, next) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(htmlSignUp);
    next();
});

app.get("/home", function(req,res, next) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(homePage);
    next();
});

app.post('/home', function(req,res) {
    var firstName = req.body.create_firstname;
    var lastName = req.body.create_lastname;
    var email = req.body.enter_new_email;
    var password = req.body.create_password;
    
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);

    const queryString = "INSERT INTO `mytable` (`FirstName`, `LastName`) VALUES (?,?)";
    myDB.query(queryString, [firstName, lastName], (err,results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " + err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new user with id: ", results.insertId);
        

    })
    

    res.end();
});







