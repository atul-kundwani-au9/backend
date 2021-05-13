const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongo_url } = require('./utils/config');

// import routes
const mainRouter = require('./routes/index');

const app = express();

app.use(cors()); //enable cors
app.use(express.json()); //enable json
app.use(express.static('public'));

app.get('/health', (req, res) => {
	return res.json({ message: 'Health OK' });
});

// route middleware
app.use('/api', mainRouter);

// CONNECT TO DB
mongoose
	.connect(mongo_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

// default error handler of express
app.use((err, req, res, next) => {
	res.json({
		message: 'Server Error',
		status: 500,
		error: err.toString(),
	});
});

// 404 request
app.use((req, res, next) => {
	res.status(404).json({ message: 'Wrong request', status: 404 });
});

module.exports = app;
