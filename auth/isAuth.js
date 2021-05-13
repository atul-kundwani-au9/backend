const jwt = require('jsonwebtoken');
const { secret } = require('../utils/config');
const { getUserDetail } = require('../models/authModel');

const authChecker = (req, res, next) => {
	const token = req.header('auth-token');
	if (!token) return res.json({ status: 400, message: 'Token not found' });
	try {
		const user_id = jwt.verify(token, secret);
		getUserDetail(user_id.id, (err, result) => {
			if (err) return res.json({ status: 500, message: 'DB error' });
			if (result) {
				req.userData = result;
				next();
			} else {
				return res.json({
					status: 300,
					message: 'Login Expired, Please Login Again',
				});
			}
		});
	} catch (err) {
		return res.json({
			status: 300,
			message: 'Login Expired, Please Login Again',
		});
	}
};

module.exports = authChecker;
