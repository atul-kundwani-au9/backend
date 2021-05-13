const Router = require('express').Router();
const { jsonConvert } = require('../controllers/jsonPatchController');

Router.post('/', jsonConvert);

module.exports = Router;
