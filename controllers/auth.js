const router = require('express').Router();
const path = require('path');

router.get('/sign-up', (req, res) => res.render('sign-up'));


router.get('/', function(req, res) {
  res.render('login');
});  

router.get('/signup', (req, res) => {
	res.render('signup', {layout: 'main', view: 'signup'});
});

router.post('/user', (req, res) => {
  const { body } = req;
  
  if (!body.username || !body.password || !body['confirm-password']) {
    res.status(404).json({ message: 'All fields are required!'});
    return res.redirect('/signup');
  }
  
  if (body.password !== body['confirm-password']) {
    res.status(404).json({message: 'Password did not match confirmation!'});
    return res.redirect('/signup');
  }
  
    delete body['confirm-password'];
  
    User
      .forge(req.body)
      .save()
      .then((usr) => {
        res.send({id: usr.id});
      })
      .catch((error) => {
        console.error(error);
        return res.sendStatus(500);
      });
  });

module.exports = router;