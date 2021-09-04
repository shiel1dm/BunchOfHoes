var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('home', {layout: 'main', template: 'home'});
});

router.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});

module.exports = router;