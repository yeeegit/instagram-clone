const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Post = require('./Post')

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isAuthorLiked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  parentCommentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Comments',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: true,
  }
}, {
  timestamps: true
})

User.hasMany(Comment, { foreignKey: 'userId' })
Comment.belongsTo(User, { foreignKey: "userId" })

Post.hasMany(Comment, { foreignKey: 'postId' })
Comment.belongsTo(Post, { foreignKey: "postId" })

Comment.hasMany(Comment, { as: 'Replies', foreignKey: 'parentCommentId' })
Comment.belongsTo(Comment, { as: "Parent", foreignKey: 'parentCommentId' })

module.exports = Comment