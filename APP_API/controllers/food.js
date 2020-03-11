const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const getFoods = async (req, res) => res.json(await Food.find().catch(err => {
    return err
}));

const createFood = async (req, res) => res.json(await Food.create(req.body).catch(err => {
    return err
}));

const getSingleFood = async (req, res) => res.json(await Food.findOne({_id: req.params.foodId}).catch(err => {
    return err
}));

const updateFood = async (req, res) => res.json(await Food.updateOne({_id: req.params.foodId}, req.body).catch(err => {
    return err
}));

const deleteFood = async (req, res) => res.json(await Food.deleteOne({_id: req.params.foodId}).catch(err => {
    return err
}));

module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};
