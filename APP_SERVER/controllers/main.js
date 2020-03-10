const index = (req, res) => {

    res.render('index', {
        title: 'Rishabh'
    });
};

module.exports = {
    index
};
