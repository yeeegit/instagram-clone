const sequelize = require("../../config/connectionToDB");
const { DataTypes } = require("sequelize");
const User = require("./User");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isCommentsAllowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

module.exports = Post;
