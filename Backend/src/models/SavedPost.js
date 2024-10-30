const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Post = require('./Post')


const SavedPost = sequelize.define('SavedPost', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: "CASCADE"
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
    onDelete: "CASCADE"
  }
})

User.belongsToMany(Post, { through: SavedPost, foreignKey: "userId" })
Post.belongsToMany(User, { through: SavedPost, foreignKey: 'postId' })


module.exports = SavedPost