/*
 * @Author: Evan
 * @Date: 2020-10-04 15:58:38
 * @LastEditors: Evan
 * @LastEditTime: 2020-10-04 16:13:06
 */  
 
const Router = require('koa-router')
const controllers = require('../controller')
const router = new Router()
const WEATHER = require('../config').WEATHER

router.get(`${WEATHER}/get`, controllers.weather)

module.exports = router