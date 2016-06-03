var mongoose = require('mongoose');

var toySchema = new mongoose.Schema({
	name: {type: String, required: true } ,
	purpose: {type: String, required: true} ,
	smelly: {type: Boolean}

});

module.exports = mongoose.model('Toy', toySchema);