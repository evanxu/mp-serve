/*
 * @Author: Evan
 * @Date: 2020-10-04 16:04:32
 * @LastEditors: Evan
 * @LastEditTime: 2020-10-04 16:50:32
 */ 
const fetch = require('../utils/fetch')
const ak = require('../config').baiduKey

module.exports = async (ctx, next) => {
    let body = await fetch('get', `http://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=${ak}`)
    
    ctx.body = JSON.parse(body)
  }
  