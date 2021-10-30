//1.npm init.
//2.then follow the package name etc..
//3. create a file with .js extension
//4. npm install --save body-parser cors del express method-override morgan
//5. write the following commands to send response.

//CODE:-
var express = require('express');//imports express js
var bodyParser = require('body-parser');//enable the express app to read the incoming body
var logger = require('morgan');//for logging all http request 
var methodOverride = require('method-override')//allows to use put and delete request
var cors = require('cors');//cross origin resource sharing enables ionic to communicate with server
var app = express();
const fs = require('fs')
app.use(express.static(__dirname));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/users',(req,res)=>{
    res.json({
        'id':1,
        'name':"Gaurav Prasad"
    })
})
app.listen(process.env.PORT||3000);//very important if not specified it won't give any response. 
//process.env.PORT refers if we have already declared a port in env than it will response in that port 
//or it will listen to port no 3000
// http://localhost:3000/users
