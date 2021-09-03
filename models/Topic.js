const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Topic extends Model {}

Topic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            AllowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        topic_name: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic',
    }
);

module.exports = Topic;