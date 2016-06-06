var mongoose = require('mongoose');

//look up mongoose docs for paranaters on schema min max or must have certain values
// require model files that link to dog model
var Owner = require('./ownerSchema.js'); 
var ToyModel = require('./toymodel.js');

var dogSchema = new mongoose.Schema({
	name: {type: String, required: true } ,
	breed: {type: String, required: true} ,
	badBreath: {type: Boolean} ,
	owner: Owner, // calling to another schema
	legs: {type: Number},
	favToys: [{type: mongoose.Schema.Types.ObjectId, ref: 'Toy'}] //explain this !
//what is the difference between owner and favtoys??

});


// what is this doing? creates the model and exported it based on the schema
module.exports = mongoose.model('Dog', dogSchema);

