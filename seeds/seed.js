const sequelize = require('../config/connection')

const userSeedData = require('./userSeedData.json')
const postSeedData = require('./postSeedData.json')
const replySeedData = require('./replySeedData.json')
const topicSeedData = require('./topicSeedData.json')
const { User, Post, Reply, Topic } = require('../models')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n ----- DATABASE SYNCED ----- \n')

  const user = await User.bulkCreate(userSeedData)
  const post = await Post.bulkCreate(postSeedData)
  const reply = await Reply.bulkCreate(replySeedData)
  const topic = await Topic.bulkCreate(topicSeedData)


  process.exit(0);
}

seedDatabase();

/**Getting No Sequelize instance passed. Looking into it tomorrow. 
 * The issue is not w/ the sequelize call, it is specifically something
 * in this file I believe.
*/