/*
 * @Author: Wanko
 * @Date: 2024-04-12 11:21:02
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:53:40
 * @Description:
 */
const koaJwt = require('koa-jwt')
const jwt = require('jsonwebtoken')
const koBasicAuth = require('koa-basic-auth')
const {
  JWT_SCRIPT,
  JWT_EXPIRT_IN,
  JWT_REFRESH_SCRIPT,
  JWT_REFRESH_EXPIRE_IN,
  BASIC_NAME,
  BASIC_PASS
} = require('../config')


/**
 * @description: 验证token
 */
const auth = koaJwt({ secret: JWT_SCRIPT })

const basicAuth = koBasicAuth({
  name: BASIC_NAME,
  pass: BASIC_PASS
})
/**
 * @description: 验证refreshToken
 */
const authRefresh = koaJwt({ secret: JWT_REFRESH_SCRIPT })

/**
 * @description: 生成token
 * @param {*} data 签名参数
 * @return {*}
 */
const signToken = (data) =>
  jwt.sign(data, JWT_SCRIPT, {
    expiresIn: JWT_EXPIRT_IN
  })

/**
 * @description: 生成refreshToken
 */
const signRefreshToken = (data) =>
  jwt.sign(data, JWT_REFRESH_SCRIPT, {
    expiresIn: JWT_REFRESH_EXPIRE_IN
  })

module.exports = {
  auth,
  authRefresh,
  basicAuth,
  signToken,
  signRefreshToken
}
