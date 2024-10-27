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
    mediaUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mediaType: {
      type: DataTypes.ENUM("image", "video"),
      allowNull: false,
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isSaved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCommentsAllowed: {
      // disables commenting if its false.
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    hideLikeCount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
