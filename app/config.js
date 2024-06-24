/*
 * @Author: Wanko
 * @Date: 2024-04-05 16:33:12
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:54:31
 * @Description:
 */
const path = require('path')
const debug = require('./env')

const { name } = require('../package.json')

const DB_NAME = name
const BASE_URL = 'https://www.wanko.top/public'
const CONNECT_STR_DEV = `mongodb://localhost:27017/${DB_NAME}`
const CONNECT_STR_PRO = `mongodb://koa:111111@101.35.252.97:27017/${DB_NAME}`

const LOCAL_STATIC_PATH = path.join(__dirname, 'public')

const PROD_STATIC_PATH = `/project/static/${name}`



const JWT_SCRIPT = 'wanko-jwt-secret'
const JWT_REFRESH_SCRIPT = 'wanko-jwt-refresh-secret'

const JWT_EXPIRT_IN = '1d'
const JWT_REFRESH_EXPIRE_IN = '7d'

const BASIC_NAME = 'wanko'
const BASIC_PASS = 'wanko'

module.exports = {
  BASE_URL,
  BASIC_NAME,
  BASIC_PASS,
  LOCAL_STATIC_PATH,
  CONNECT_STR: debug ? CONNECT_STR_DEV : CONNECT_STR_PRO,
  UPLOAD_DIR: debug ? LOCAL_STATIC_PATH : PROD_STATIC_PATH,
  FILE_DIR: debug ? 'http://localhost:3000' : `${BASE_URL}`,

  JWT_SCRIPT,
  JWT_REFRESH_SCRIPT,

  JWT_EXPIRT_IN,
  JWT_REFRESH_EXPIRE_IN,
  needDb: true,
  PORT: 3000,
  STATIC_PATH: '../public'
}
