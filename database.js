var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var sql = require('mysql');
var fs = require('fs');
var url = require('url');

var myDB = sql.createConnection({
    //properties...
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sampleDB'
    });
    
myDB.connect(function(err) {
    if (err) {
        console.log('There is an error');
    } else {
        console.log("Connected to Database");
    }
});