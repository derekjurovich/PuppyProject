// dependenices found in json file 
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// var session = require('express-session'); //accessing node_modules installed

//invoking express to make node easier
var app = express(); //just to make it easier to put app instead of typing express


//dependencies we created (our own library kind of)
var dogCtrl = require('./dogctrl.js'); // setup external CRUD controller file
var mongoose = require('mongoose');
var toyCtrl = require('./toyCtrl.js');


//middleware stuff is imported from dependent library
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(session(config));
app.use(express.static(__dirname + '/public')); //just how it is. this ties server and look at front side


//post
app.post('/puppies', dogCtrl.create);
//get
app.get('/puppies', dogCtrl.read);
//put
app.put('/puppies/:id', dogCtrl.update);
//delete checks if id exists
app.delete('/puppies/:id', dogCtrl.delete);

//post
app.post('/toys', toyCtrl.create);
//get
app.get('/toys', toyCtrl.read);
//put
app.put('/toys/:id', toyCtrl.update);
//delete checks if id exists
app.delete('/toys/:id', toyCtrl.delete);



//create database name, this connects and creates name of database
mongoose.connect("mongodb://localhost:27017/allTheDogs");
mongoose.connection.once('open', function(){

	console.log("Connected to mongoDB using mongoose!!");
});





app.listen(8000, function() {
//anything above 3000 is usually good, port 80 is live public web applications
	console.log("listening on 8000");

});

