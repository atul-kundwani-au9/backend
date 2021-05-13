const addressSchema = require('../models/addressSchema');

exports.addAddress = (req, res, next) => {
	try {
		const data = {
			address: req.body.address,
			userId: req.userData._id,
		};
		addressSchema.addAddress(data, (err, reply) => {
			if (err) return next(err);
			return res.json(reply);
		});
	} catch (error) {
		return next(error);
	}
};
