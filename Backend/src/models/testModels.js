const sequelize = require('../../config/connectionToDB');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');

async function testModels() {
  await sequelize.sync({ force: true }); 
  console.log('Database tables synchronized successfully');

  const user = await User.create({ username: 'testuser', email: 'testuser@gmail.com', password: 'testuser@', fullname: 'testuser' });
  const post = await Post.create({ caption: 'Hello World', userId: user.id });
  const comment = await Comment.create({ content: 'Nice post!', postId: post.id, userId: user.id, parentCommentId: 1 });
  const like = await Like.create({ userId: user.id, postId: post.id ,commentId:comment.id});

  console.log('Data successfully added!');
}

testModels();
