const router = require('express').Router();
const { Model, Topic } = require('../../models');
const { findAll } = require('../../models/Post');


/*router.get('/topics', async (req, res) => {
  const topicData = await findAll({
    attributes: {'topic_name'}
  });
  const topics = topicData.map((topics) => topics.get({ plain: true });
  res.render('topics', {topics});*/


module.exports = router;