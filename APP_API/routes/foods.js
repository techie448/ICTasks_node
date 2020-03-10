let express = require('express');
const router = express.Router();

const ctrlFood = require('./../controllers/food');

router.get('/foods', ctrlFood.getFoods);
router.post('/foods', ctrlFood.createFood);
router.put('/foods/:foodid', ctrlFood.deleteFood);
router.get('/foods/:foodid', ctrlFood.getSingleFood);
router.put('/foods/:foodid', ctrlFood.updateFood);

module.exports = router;
