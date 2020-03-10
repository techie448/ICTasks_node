const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/list', ctrlFood.foodList);
router.get('/favourite', ctrlFood.favouriteFood);

module.exports = router;
