/*
 * @Author: Evan
 * @Date: 2020-10-04 16:05:08
 * @LastEditors: Evan
 * @LastEditTime: 2020-10-04 16:05:54
 */ 
const superagent = require('superagent')

async function fetchApi(type = 'get', url, config = {}){
  let obj = config.params || {}

  let resType = config.type || 'body'

  return new Promise((resolve, reject) => {
    if(type == 'get'){
      superagent
        .get(url)
        .query(obj)
        .end((err, res) => {
          err ? reject(err) : resolve(res[resType])
        })
    }else{
      superagent
        .post(url)
        .send(obj)
        .end((err, res) => {
          err ? reject(err) : resolve(res.body)
        })
    }

  })
}


/**
 * 对象按照key排序
 * @param       {object} obj [description]
 * @constructor
 * @return      {object}     [description]
 */
function _objKeySort(obj) {
  let newKey = Object.keys(obj).sort();

  let newObj = {};
  for (let i of newKey) {
    newObj[i] = obj[i];
  }

  return newObj;
}

module.exports = fetchApi
