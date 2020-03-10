let foodArray = [
    {name: 'Oatmeal', type: 'Breakfast'},
    {name: 'Pizza', type: 'Lunch'},
    {name: 'Pasta', type: 'Dinner'}
];

const myFavFood = foodArray[2];

let foodList = (req, res) => {

    res.render('foodlist', {
        title: 'Food list',
        foods: foodArray
    });

};

let favouriteFood = (req, res) => {

    res.render('favourite-food', {
        title: 'My favourite food',
        favfood: myFavFood
    });

};

module.exports = {
    foodList,
    favouriteFood
};
