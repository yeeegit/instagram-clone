const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/connectionToDB')
const User = require('./User')
const Comment = require('./Comment')

const CommentLike = sequelize.define('CommentLike', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false,
    onDelete: "CASCADE"
  },
  commentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Comment,
      key: 'id'
    },
    onDelete: "CASCADE",
    allowNull: false
  }
}, {
  timestamps: true,
});

User.hasMany(CommentLike, { foreignKey: "userId" })
CommentLike.belongsTo(User, { foreignKey: "userId" })

Comment.hasMany(CommentLike, { foreignKey: 'commentId' })
CommentLike.belongsTo(Comment, { foreignKey: 'commentId' })

module.exports = CommentLike