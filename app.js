/*
 * @Author: Evan
 * @Date: 2020-10-04 15:33:17
 * @LastEditors: Evan
 * @LastEditTime: 2020-10-04 15:58:27
 */ 
const Koa = require('koa')
const logger = require("koa-logger")
const bodyParser = require("koa-bodyparser")

const app = new Koa()
const router = require('./router')

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()//调用下一个中间件
})

app.use(logger())

app.use(bodyParser())

app.use(async (ctx, next) => {
    const begin_time = new Date().getTime()
    await next()//处理下一个中间件
    const spend_ms = new Date().getTime() - begin_time//耗费时间
    console.log(`Time: ${spend_ms}ms`)
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001)
