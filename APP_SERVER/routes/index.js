const express = require('express');
const router = express.Router();
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', ctrlFood.homeList);
router.get('/foods/:foodId', ctrlFood.foodInfo);
router.route('/new')
    .get(ctrlFood.addNewFood)
    .post(ctrlFood.doAddNewFood);

module.exports = router;
