const router = require('express').Router();

module.exports = (app) => {
    // SIGN UP FORM
    app.get('/sign-up', (req, res) => res.render('sign-up'));
  };

module.exports = router;