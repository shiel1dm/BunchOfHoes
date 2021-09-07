var router = require('express').Router();
const { Model, Post, Topic, User, Reply } = require('../models/Post');
const userRouter = require('./api/userRoutes');
const homeRouter = require('./api/homeRoutes');
const auth = require('./auth');

router.get('/', function(req, res, next) {
    res.render('home', {layout: 'main', view: 'home'});
});

router.use(userRouter);
router.use(homeRouter);
router.use(auth);


module.exports = router;