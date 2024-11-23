const redis = require('ioredis')
require('dotenv').config()

const redisClient = new redis(process.env.REDIS_URL)

redisClient.on('connect', () => console.log(`Redis connected successfully!`))
redisClient.on('error', (err) => console.log(`Redis error :`, err))

module.exports = redisClient;