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
router.get('/:id', async (req, res, next) => {
  try{
    const data = await Post.findByPk(req.params.id);
    if(!data) {
      res.status(404).json({message: 'This post does not exist.'})
      return;
    }
    const content = data.get({ plain: true });
    res.render('test', content)
  } catch (err) {res.status(500).json(err)}

});

// router.post('/new', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         body: req.body.body
//     }).then((postData) => {
//             res.json(postData);
//         }).catch((err) => {
//             res.json(err);
//         });
// });

// router.put('/:id', (req, res) => {
//     console.log(req.params.id);
//     Post.update(
//     {
//         title: req.body.title,
//         body: req.body.body
//     },
//     {
//         where: {
//             post_id: req.params.id,
//         }
//     }).then((postData) => {
//             res.json(postData);
//         }).catch((err) => {
//             res.json(err);
//         });
// });

module.exports = router;