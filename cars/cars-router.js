const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) => {
	db.select('*')
		.from('cars')
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({error: 'failed to get cars'});
		});
});

router.post('/', validateCars, (req, res) => {
	db('cars')
		.insert(req.body)
		.then(id => {
			res.status(201).json({message: 'car create'});
		})
		.catch(err => {
			res.status(500).json({message: err});
		});
});
module.exports = router;
// router.put('/:id', (req, res) => {});

// router.delete('/:id', (req, res) => {});

function validateCars(req, res, next) {
	const car = req.body;
	!car.vin
		? res.status(400).json({error: 'Please include car vin'})
		: !car.make
		? res.status(400).json({error: 'Please include car make'})
		: !car.model
		? res.status(400).json({error: 'Please include car model'})
		: !car.mileage
		? res.status(400).json({error: 'Please include car mileage'})
		: next();
}
