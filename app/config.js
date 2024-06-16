/*
 * @Author: Wanko
 * @Date: 2024-04-05 16:33:12
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-16 09:11:47
 * @Description:
 */
const path = require('path')
const debug = require('./env')

const BASE_URL = 'http://www.wanko.top/public'
const DB_NAME = 'koa'
const CONNECT_STR_DEV = `mongodb://localhost:27017/${DB_NAME}`
const CONNECT_STR_PRO = `mongodb://koa:111111@101.34.39.74:27017/${DB_NAME}`
const FIRE_DIR = debug ? path.join(__dirname, 'public') : '/public/image'

const JWT_SCRIPT = 'wanko-jwt-secret'
const JWT_REFRESH_SCRIPT = 'wanko-jwt-refresh-secret'

const JWT_EXPIRT_IN = '10s'
const JWT_REFRESH_EXPIRE_IN = '7d'

module.exports = {
  BASE_URL,
  CONNECT_STR: debug ? CONNECT_STR_DEV : CONNECT_STR_PRO,
  FIRE_DIR,

  JWT_SCRIPT,
  JWT_REFRESH_SCRIPT,

  JWT_EXPIRT_IN,
  JWT_REFRESH_EXPIRE_IN,
  needDb: false
}
