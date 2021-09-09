var router = require('express').Router();
const { Model, Post, Topic, User, Reply } = require('../models');
const userRouter = require('./api/userRoutes');
const blogRouter = require('./api/blogRoutes');
const auth = require('./auth');

router.get('/', function(req, res, next) {
    Post.findAll().then((postData) => {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('home', {posts, layout: 'main', view: 'home'});
    });
});

router.use(userRouter);
router.use('/blogRoutes', blogRouter);
router.use(auth);


module.exports = router;