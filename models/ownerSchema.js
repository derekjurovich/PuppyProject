var mongoose = require('mongoose');


var ownerSchema = new mongoose.Schema({

	name: {type: String, required: true},
	address: {type: String},
	city: {type: String},
	state:{type: String},
	car:{type: String},
	givesTreats: {type: Boolean}


});

module.exports = ('Owner', ownerSchema); 


// "Owner" is what we call this when we refer to it, ownerSchema is the object schema. In other documents we can call to this by "Owner"
