const userSchema = require('../schema/userSchema');

exports.registerUser = (userData, callback) => {
	try {
		userSchema.findOne({ email: userData.email }, async (err, reply) => {
			if (err) return callback(err);
			if (reply)
				return callback('', {
					message: 'User email already exist',
					status: 300,
				});
			else {
				await userSchema(userData).save();
				return callback('', {
					message: 'Register Successfull',
					status: 200,
				});
			}
		});
	} catch (err) {
		return callback(err);
	}
};

exports.loginUser = (email, callback) => {
	try {
		userSchema.findOne({ email: email }, (err, reply) => {
			if (err) return callback(err);
			return callback('', reply);
		});
	} catch (err) {
		return callback(err);
	}
};

exports.getUserDetail = (user_id, callback) => {
	try {
		userSchema.findOne({ _id: user_id }, (err, reply) => {
			if (err) return callback(err);
			return callback('', reply);
		});
	} catch (err) {
		return callback(err);
	}
};
