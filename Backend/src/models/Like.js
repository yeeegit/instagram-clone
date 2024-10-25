const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const Post = require('./Post')
const User = require('./User')
const Comment = require('./Comment')

const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    },
    onDelete: "CASCADE"
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: "CASCADE"
  },
  commentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Comment,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['postId', 'userId']
    }
  ]
})

Post.hasMany(Like, { foreignKey: 'postId' })
Like.belongsTo(Post, { foreignKey: 'postId' })

User.hasMany(Like, { foreignKey: "userId" })
Like.belongsTo(User, { foreignKey: "userId" })

Comment.hasMany(Like, { foreignKey: 'commentId' })
Like.belongsTo(Comment, { foreignKey: 'commentId' })

module.exports = Like