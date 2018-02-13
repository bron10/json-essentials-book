const mongoose = require('mongoose');

//console.log("mongoose", )
const Address = mongoose.model('customers_address', {
	"pincode": Number,
	"street": String,
	"city": String
});

module.exports.customers = mongoose.model('customers', {
	//	"cust_id": Number,
	"firstname" : String,
	"lastname": String,
    "Address": {type : mongoose.Schema.Types.Mixed, ref: 'customers_address'}
});