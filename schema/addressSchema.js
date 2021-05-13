const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('user_address', addressSchema);
