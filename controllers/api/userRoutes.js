const router = require('express').Router();
const { User } = require('../../models')

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData){
      res
        .status(400)
        .json({ message: 'Email incorrect, please try again.'})
      return;      
    }

    const validPass = await userData.checkPassword(req.body.password)

    if (!validPass) {
      res
        .status(400)
        .json({ message: 'Incorrect password'})
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true

      res.json({ user: userData, message: 'Logged in' })
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router

