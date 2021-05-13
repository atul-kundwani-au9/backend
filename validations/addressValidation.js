const { addressSchema } = require('./validationSchema');

exports.addressValidation = (req, res, next) => {
	const { error } = addressSchema.validate(req.body);
	if (error) {
		return res.json({
			message: 'Adding address failed',
			status: 400,
			error: error.details[0].message,
		});
	}
	next();
};
