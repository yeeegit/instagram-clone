const cron = require('node-cron')
const syncPostLikeToDB = require('../services/PostLike/syncPostLikeToDb');
const { ErrorResponse } = require('./responseHandler');

// Node Cron scheduled to execute every 30 mins
cron.schedule('*/30 * * * *', async () => {
  try {
    console.log(`[${new Date().toISOString()}] Redis and PostgreSQL synchronization is starting...`);
    await syncPostLikeToDB();
    console.log(`[${new Date().toISOString()}] Redis and PostgreSQL  synchronization completed  without errors.`);
  } catch (error) {
    throw new ErrorResponse(`Database and Redis synchronization error : ${error.message}`, 500)
  }

});