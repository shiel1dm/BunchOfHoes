const { Topics } = require('../models');

const topicsData = [
    {
        topic_name: 'annuals'
    },
    {
        topic_name: 'perrenials'
    },
    {
        topic_name: 'herbs'
    },
    {
    topics_name:'vegetables'
    },
];

const seedTopics =() => Topics.bulkCreate(categoryData);

module exports = seedTopics;