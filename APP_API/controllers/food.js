const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const getFoods = (req, res) => {
    Food.find().then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
};


const createFood = (req, res) => {
    Food.create({
        name: req.body.name,
        type: req.body.type
    }).then(data => res.status(201).json(data))
        .catch(err => res.status(400).json(err));

};

const getSingleFood = (req, res) => {
    Food.findById(req.params.foodId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
};

const updateFood = (req, res) => {
    Food.findById(req.params.foodId)
        .then(data => {
            if (!data) throw new Error("food ID not found");

            data.name = req.body.name;
            data.type = req.body.type;

            data.save().then(data => res.status(200).json(data))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
};
const deleteFood = (req, res) => {

    Food.deleteOne({"_id": `${req.params.foodId}`}
    ).then(data => res.status(400).json({"Items Deleted": `${data.deletedCount}`}))
        .catch(err => res.status(400).json(err));
};

module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};
