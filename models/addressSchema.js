const addressSchema = require('../schema/addressSchema');

exports.addAddress = async (data, callback) => {
	try {
		await addressSchema(data).save();
		return callback('', {
			message: 'New address added',
			status: 200,
		});
	} catch (err) {
		return callback(err);
	}
};
