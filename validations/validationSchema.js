const Joi = require('joi');

exports.loginSchema = Joi.object({
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
});

exports.userRegisterSchema = Joi.object({
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
});

exports.addressSchema = Joi.object({
	address: Joi.string().min(6).required(),
});
