const Router = require('express').Router();

const { imageThumbnail } = require('../controllers/imageController');

Router.post('/', imageThumbnail);

module.exports = Router;
