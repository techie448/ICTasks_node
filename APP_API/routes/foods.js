let express = require('express');
const router = express.Router();

const ctrlFood = require('./../controllers/food');

router.route('/foods')
    .get(ctrlFood.getFoods)
    .post(ctrlFood.createFood);

router.route('/foods/:foodId')
    .delete(ctrlFood.deleteFood)
    .get(ctrlFood.getSingleFood)
    .put(ctrlFood.updateFood);

module.exports = router;
