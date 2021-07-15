const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../hw14/config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
