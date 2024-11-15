const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')
const User = require('./User')

const Follow = sequelize.define("Follow", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  followerId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: "CASCADE",
    allowNull: false
  },
  followingId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false,
    onDelete: "CASCADE"
  }
},
  {
    timestamps: true
  })

User.belongsToMany(User, {
  as: 'following',
  through: Follow,
  foreignKey: 'followerId',
  otherKey: 'followingId'
})

User.belongsToMany(User, {
  as: 'followers',
  through: Follow,
  foreignKey: 'followingId',
  otherKey: 'followerId'
})

module.exports = Follow