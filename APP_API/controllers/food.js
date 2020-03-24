const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const getFoods = async (req, res) => res.json(await Food.find().catch(err => err));

const createFood = async (req, res) => res.status(201).json(await Food.create(req.body).catch(err => err));

const getSingleFood = async (req, res) => res.json(await Food.findOne({_id: req.params.foodId}).catch(err => err));

const updateFood = async (req, res) => res.json(await Food.updateOne({_id: req.params.foodId}, req.body).catch(err => err));

const deleteFood = async (req, res) => res.json(await Food.deleteOne({_id: req.params.foodId}).catch(err => err));

module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};
