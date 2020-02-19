const express = require('express');

const CarsRouter = require('../cars/cars-router');

const server = express();

server.use(express.json());
server.use('/api/cars', CarsRouter);
server.get('/', (req, res) => {
	res.send('<h3> Just a poor API from a poor Family!</h3>');
});
module.exports = server;
