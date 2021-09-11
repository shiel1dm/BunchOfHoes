var router = require('express').Router();
const {
    Model,
    Post,
    Topic,
    User,
    Reply
} = require('../models');
const apiRoutes = require('./api')
//const blogRouter = require('./api/blogRoutes');
const homeRoutes = require('./homeRoutes');
const withAuth = require('../utils/auth');

/*router.get('/', withAuth, async function (req, res) {
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
*/
router.use('/api', apiRoutes);

router.use('/', homeRoutes)



module.exports = router;