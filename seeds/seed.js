const sequelize = require('../config/connection')
const {User, Post, Reply} = require('../models')


const userSeedData = require('./userSeedData.json')
const postSeedData = require('./postSeedData.json')
const replySeedData = require('./replySeedData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userSeedData)
  const post = await Post.bulkCreate(postSeedData)
  const reply = await Reply.bulkCreate(replySeedData)
  
  process.exit(0);
}

seedDatabase();

//Getting No Sequelize instance passed. Looking into it tomorrow.