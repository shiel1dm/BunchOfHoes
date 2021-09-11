var router = require('express').Router();
const {
    Model,
    Post,
    Topic,
    User,
    Reply
} = require('../models');
const userRouter = require('./api/userRoutes');
const blogRouter = require('./api/blogRoutes');
const auth = require('./auth');

router.get('/', async function (req, res, next) {
    const postData = await Post.findAll()
    const posts = postData.map((post) => post.get({
        plain: true
    }));
    // console.log(posts)

    const topicData = await Topic.findAll()
    const topics = topicData.map((topic) => topic.get({
        plain: true
    }));
    console.log(topics)

    res.render('home', {
        posts,
        topics,
        layout: 'main',
        view: 'home'
    });
});

router.use(userRouter);
router.use('/blogRoutes', blogRouter);
router.use(auth);


module.exports = router;