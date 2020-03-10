let foodList = (req, res) => {

    res.render('foodlist', {title: 'Food list'});

};

let favouriteFood = (req, res) => {

    res.render('favourite-food', {title: 'My favourite food'});

};

module.exports = {
    foodList,
    favouriteFood
};
