const request = require('request');
const apiOptions = {server: 'http://localhost:3000'};


const _renderHomepage = (req, res, responseBody) => res.render('foodlist', {foods: responseBody});

const homeList = (req, res) => {
    const path = '/api/foods';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => _renderHomepage(req, res, body));
};

const _renderCreatePage = (req, res) => res.render('create-new-food', {title: 'Create New Food'});

const addNewFood = (req, res) => _renderCreatePage(req, res);

const doAddNewFood = (req, res) => {
    const path = '/api/foods';
    const postData = {
        name: req.body.name,
        type: req.body.type
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };

    request(requestOptions, (err, response, body) => {
        if (response.statusCode === 201) {
            res.redirect('/');
        }
    });
};

const _renderDetailPage = (req, res, responseBody) => res.render('food-info', {currentFood: responseBody});

const foodInfo = (req, res) => {
    const path = `/api/foods/${req.params.foodId}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => _renderDetailPage(req, res, body));
};

module.exports = {
    homeList,
    foodInfo,
    doAddNewFood,
    addNewFood
};
