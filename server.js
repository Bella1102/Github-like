const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// ##################################################

// app.prepare().then(() => {
//     const server = new Koa()
//     server.use(async (ctx, next) => {
//         await handle(ctx.req, ctx.res)
//         ctx.respond = false
//     })

//     server.listen(3000, () => {
//         console.log('koa server listening on 3000')
//     })
// })

// ##################################################

// const server = new Koa()
// const router = new Router()

// // 定义router的功能，获取id功能是koa-router加到ctx上的，不是koa的属性
// router.get('/test/:id', (ctx) => {
//     // ctx.body = `<p>123456 ${ctx.path} ${ctx.method} ${ctx.params.id}</p>`
//     ctx.body = { success: true }
//     ctx.set('Content-Type', 'application/json')

// })

// // start to compile
// server.use(async (ctx, next) => {
//     await next()
// })

// server.use(router.routes())

// server.listen(3000, () => {
//     console.log('koa server listening on 3000')
// })

// ##################################################

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/a/:id', async ctx => {
        const id = ctx.params.id
        await handle(ctx.req, ctx.res, {
          pathname: '/a',
          query: { id },
        })
        ctx.respond = false
    })

    server.use(router.routes())

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })


    server.listen(3000, () => {
        console.log('koa server listening on 3000')
    })
})


// const session = require('koa-session')
// const Redis = require('ioredis')
// const auth = require('./server/auth')
// const RedisSessionStore = require('./server/session-store')

// create redis client
// const redis = new Redis()
    
// server.keys = ['Jokcy develop Github App']
// const SESSION_CONFIG = {
// key: 'jid',
// store: new RedisSessionStore(redis),
// }

// server.use(session(SESSION_CONFIG, server))

// 配置处理github OAuth的登录
// auth(server)

  // router.get('/api/user/info', async ctx => {
  //   const user = ctx.session.userInfo
  //   if (!user) {
  //     ctx.status = 401
  //     ctx.body = 'Need Login'
  //   } else {
  //     ctx.body = user
  //     ctx.set('Content-Type', 'application/json')
  //   }
  // })

//   server.use(async (ctx, next) => {
//     ctx.cookies.set('id', 'userid:xxxxx')
//     await handle(ctx.req, ctx.res)
//     ctx.respond = false
//   })

//   server.use(async (ctx, next) => {
//     ctx.res.statusCode = 200
//     await next()
//   })




