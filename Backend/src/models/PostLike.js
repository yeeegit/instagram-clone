const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const Post = require('./Post')
const User = require('./User')

const PostLike = sequelize.define('PostLike', {
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
}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['postId', 'userId']
    }
  ]
})

Post.hasMany(PostLike, { foreignKey: 'postId' })
PostLike.belongsTo(Post, { foreignKey: 'postId' })

User.hasMany(PostLike, { foreignKey: "userId" })
PostLike.belongsTo(User, { foreignKey: "userId" })


module.exports = PostLike