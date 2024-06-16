/*
 * @Author: Wanko
 * @Date: 2024-04-12 11:21:02
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-12 14:43:42
 * @Description:
 */
const koaJwt = require('koa-jwt')
const jwt = require('jsonwebtoken')

const {
  JWT_SCRIPT,
  JWT_EXPIRT_IN,
  JWT_REFRESH_SCRIPT,
  JWT_REFRESH_EXPIRE_IN
} = require('../config')

/**
 * @description: 验证token
 */
const auth = koaJwt({ secret: JWT_SCRIPT })

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
  signToken,
  signRefreshToken
}
