var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', {layout: 'default', template: 'home-template'});
});

router.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});