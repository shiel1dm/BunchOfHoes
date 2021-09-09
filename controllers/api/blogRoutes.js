const router = require('express').Router();

const Post = require('../../models/Post');

//moved to index
// router.get('/view', (req, res) => {
//     Post.findAll().then((postData) => {
//         const posts = postData.map((post) => post.get({ plain: true }));
//         res.render('home', {posts, layout: 'main', view: 'home'});
//         console.log(posts);
//     });
// });

//not working
router.get('/:id', function(req, res, next) {
    Post.findOne({
        where: {
            post_id: req.params.id,
        },
        attributes: [`post_id`, `title`, `body`, `user_id`],
    }).then((postData) => {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('login', {posts, layout: 'main', view: 'login'});
        console.log("issa post "+posts);
}).catch((err) => {
        res.json(err);
    });
});

router.post('/new', (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then((postData) => {
            res.json(postData);
        }).catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    Post.update(
    {
        title: req.body.title,
        body: req.body.body
    },
    {
        where: {
            post_id: req.params.id,
        }
    }).then((postData) => {
            res.json(postData);
        }).catch((err) => {
            res.json(err);
        });
});

module.exports = router;