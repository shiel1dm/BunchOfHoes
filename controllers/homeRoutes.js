const router = require('express').Router();
const { User } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req,res) => {
  try {
      
    res.render('home', {
      users: req.session.user,
      logged_in: req.session.logged_in,
    })
  }catch (err) {
      res.status(500).json(err)
    }   
});

router.get('/signup', async (req, res) => {
  res.render('signup')
})

router.get('/login', async (req,res) => {
  try{  
      if (req.session.logged_in) {
        res.redirect('/');
    
    } res.render('login')
  }catch (err){
    res.status(500).json(err)
  }

});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.email } })
    
    if (!userData){
       
      res.status(400)
      res.json({ message: 'Email incorrect, please try again.'})
      return;      
    }
     
     
    const validPass = await userData.checkPassword(req.body.password)
    console.log(validPass)
 
    if (!validPass) {
      console.log(req.body)
      res.status(400)
      res.json({ message: 'Incorrect password'})
      return;
    }

    console.log('made through loop')

    user.get({plain: true})
 
    req.session.save(() => {
      req.sessioncookie.user = userData
      req.session.logged_in = true
 
      res.json({ user: userData, message: 'Logged in' })
    })
 
   }catch (err) {
     
    res.status(400).json({message: 'ugh'})
   }
 })

router.post('/signup', async (req, res) => {
  console.log(req.body)
  try{
    const { body } = req;
    
    if (!body.username || !body.password) {
      console.log(body)
      res.status(404).json({ message: 'All fields are required!'});
      return res.redirect('/signup');
    }
    const userData = User.create({
      username: req.body.email,
      password: req.body.password,
    })
  

    req.session.save(() => {
      req.session.user = userData;
      req.session.logged_in = true;

      res.json({user: userData, message: 'signed up'})

    })
  }catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
  })
     


  

module.exports = router;