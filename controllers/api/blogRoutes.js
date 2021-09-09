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

router.get("/:id", (req, res) => {
    Post.findOne({
      where: {
        post_id: req.params.id,
      },
      attributes: ["post_id", "title", "body", "user_id"],
    }) 
      .then((postData) => {
        if (!postData) {
          res.status(404).json({ message: "No Post found with this id" });
          return;
        }
        // console.log("postData: "+postData);
        const post = postData.get({ plain: true });
        // console.log(post);
        res.render('indivpost', {post, layout: 'main', view: 'indivpost'});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
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
