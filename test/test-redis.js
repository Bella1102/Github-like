async function testRedis() {
    const Redis = require('ioredis')
  
    const redis = new Redis({
      port: 6379,
      host: '127.0.0.1'
    })
    // setex: for setting expiration time, key, seconds, value
    await redis.setex('a', 10 , 123)
    const keys = await redis.keys('*')
    console.log(await redis.get('a'))
}
  
testRedis()