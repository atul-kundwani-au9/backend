const Router = require('express').Router();

const { addAddress } = require('../controllers/addressController');
const { addressValidation } = require('../validations/addressValidation');

Router.post('/addAddress', addressValidation, addAddress);

module.exports = Router;
