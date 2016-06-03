// var mongojs = require('mongojs'); //will create a collection that will display in RoboMongo we will us mongojs specific methods in order to post, get, update, delete. the methods are .insert(data, callback), .find({},callback), .findAndModify(data that includes id Object, callback) , .remove(id Object, callback) these are mongo js methods. callback is an anonymous function that does error handling and sends result. will send a response as an error or valid result. mongo interaction is only thorugh the controller files and does not need to be in index.js. robomongo is able to show what is in database. 

// var ObjectId= require('mongodb').ObjectId;
// var dogs = require('./dogs.js');
// var db = mongojs('dogs', ['doginfo']); //collection , first argument is database, second argument is the collection

var ToyModel = require('./models/ToyModel.js');

//mongoose methods include --> 



module.exports = {
//setup object with CRUD methods

// ToyModel.save (callback)
	create:function(req, res, next){

		var dog = new ToyModel(req.body); // why are we creatign a new constructor??

		dog.save(function(err, result){
			
			if  (err) {

				res.send(err);
			}
			else {
				res.send(result);
			}
		}); 

	},

// ToyModel.find(query cna be in here).exec(callback)
	read:function(req, res, next){

		ToyModel.find().exec(function(err, result){
			
			if (err) {
				res.send(err);
			}
			else {
				res.send(result);
			}

		});


	},

// ToyModel.findByIdAndUpdate(id, data, callback)
	update:function(req, res, next) {
		
		ToyModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {

			if (err) {
				res.send(err);
			}
			else {
				res.send(result);
			}	

		});

	},


// ToyModel.findByIdAndRemove(id, mostlikelyemptydata, callback)
	delete: function(req,res,next){

		ToyModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {

				if (err) {
					res.send(err);
				}
				else {
					res.send(result);
				}	

			});

	}

};