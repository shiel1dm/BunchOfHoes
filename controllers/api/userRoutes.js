const router = require('express').Router();
const bcrypt = require('bcrypt')
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    //try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    //} catch (err) {
    //  res.status(400).json(err);
    //}
  });


router.post('/signup', async (req, res) => {
   try{
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.user = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'signed up'})
    });
  } catch (err){
    res.status(400).json(err);
  }
})

// router.post('/auth', function(req, res) {
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.username = username;
// 				res.redirect('/home');
// 			} else {
// 				res.send('Incorrect Username and/or Password!');
// 			}			
// 			res.end();
// 		});
// 	} else {
// 		res.send('Please enter Username and Password!');
// 		res.end();
// 	}
// });

// router.get('/home', function(req, res) {
// 	if (req.session.loggedin) {
// 		res.send('Welcome back, ' + req.session.username + '!');
// 	} else {
// 		res.send('Please login to view this page!');
// 	}
// 	res.end();
// });

module.exports = router;