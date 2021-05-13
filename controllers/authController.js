const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userAuthModel = require('../models/authModel');
const { secret } = require('../utils/config');

exports.registerUser = (req, res, next) => {
	try {
		var data = {
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
		};
		userAuthModel.registerUser(data, (err, response) => {
			if (err) return next(err);
			return res.json(response);
		});
	} catch (err) {
		return next(err);
	}
};

exports.loginUser = (req, res, next) => {
	try {
		userAuthModel.loginUser(req.body.email, (err, userData) => {
			if (err) return next(err);
			if (!userData) {
				return res.json({
					message: 'User email doesnot exist',
					status: 300,
					error: 'User email doesnot exist',
				});
			}
			const checkPassword = bcrypt.compareSync(
				req.body.password,
				userData.password,
			);
			if (!checkPassword)
				return res.json({
					message: 'Invalid password',
					status: 300,
					error: 'Invalid password',
				});
			var token = jwt.sign({ id: userData._id }, secret, {
				expiresIn: 86400,
			});
			return res.header('auth-token', token).json({
				message: 'Login successfull',
				status: 200,
				email: userData.email,
				_id: userData._id,
				token: token,
			});
		});
	} catch (err) {
		return next(err);
	}
};
