const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectionToDB')
const Post = require('./Post')


const Tag = sequelize.define("Tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tagName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id'
    },
    onDelete: "CASCADE"
  }
}, {
  timestamps: true
})

Post.hasMany(Tag, { foreignKey: 'postId' })
Tag.belongsTo(Post, { foreignKey: "postId" })

module.exports = Tag