const router = require('express').Router();
const bcrypt = require('bcrypt')
const { User } = require('../../models');




// router.post('/signup', async (req, res) => {
//   try{
//     const userData = await User.create({
//       username: req.body.email,
//       password: req.body.password
//     });

//     req.session.save(() => {
//       req.session.user = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'signed up'})
//     });
//   } catch (err){
//     res.status(400).json(err);
//   }
// })

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