const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const Post = require('./Post')


const Media = sequelize.define("Media", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  mediaType: {
    type: DataTypes.ENUM("image", "video"),
    allowNull: false
  },
  mediaUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    },
    onDelete: "CASCADE"
  }
}, {
  timestamps: true,
  hooks: {
    beforeValidate: (media) => {
      if (media.mediaType && media.mediaType.startsWith("image/")) {
        media.mediaType = "image";
      } else if (media.mediaType && media.mediaType.startsWith("video/")) {
        media.mediaType = "video";
      }
    }
  }
})

Post.hasMany(Media, { foreignKey: 'postId' })
Media.belongsTo(Post, { foreignKey: 'postId' })

module.exports = Media