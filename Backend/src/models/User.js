const sequelize = require('../../config/connectionToDB')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  userImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  }
}, {
  timestamps: true,
  hooks: {
    beforeValidate: (user) => {
      if (!user.role || user.role.trim() === '' || !['admin', 'user'].includes(user.role)) {
        user.role = 'user'
      }
    }
  }
})

module.exports = User