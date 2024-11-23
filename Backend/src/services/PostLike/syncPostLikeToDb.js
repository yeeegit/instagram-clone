const redisClient = require('../../../config/redisClient');
const { ErrorResponse } = require('../../helpers/responseHandler');
const Post = require('../../models/Post');
const PostLike = require('../../models/PostLike');

const syncPostLikeToDB = async () => {
  try {
    const keys = await redisClient.keys('post:likeCount:*');
    await Promise.all(keys.map(async (key) => {
      const postId = key.split(':')[2];
      const likeCount = await redisClient.get(key);

      await Post.update({ likeCount }, { where: { id: postId } });

      const dbLikes = await PostLike.findAll({ where: { postId }, attributes: ['userId'] });
      const dbUserIds = dbLikes.map(like => like.userId);
      const redisUserIds = await redisClient.smembers(`post:likes:${postId}`);

      const redisUserIdSet = new Set(redisUserIds.map(id => Number(id)));
      const dbUserIdSet = new Set(dbUserIds);

      const newLikes = [...redisUserIdSet].filter(id => !dbUserIdSet.has(id));
      const removedLikes = [...dbUserIdSet].filter(id => !redisUserIdSet.has(id));

      if (newLikes.length > 0) {
        await PostLike.bulkCreate(newLikes.map(userId => ({ postId, userId })));
      }

      if (removedLikes.length > 0) {
        await PostLike.destroy({ where: { postId, userId: removedLikes } });
      }
    }));
  } catch (error) {
    throw new ErrorResponse(`Error in syncPostLikeToDB: ${error.message}`, error.statusCode || 500);
  }
};

module.exports = syncPostLikeToDB;
