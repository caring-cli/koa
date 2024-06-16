/*
 * @Author: Wanko
 * @Date: 2024-04-11 14:22:52
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 18:31:13
 * @Description:
 */

const CODES = {
  USER_NOT_EXIST: {
    key: 'USER_NOT_EXIST',
    name: '用户不存在',
    code: 10001
  },
  USER_PASSWORD_ERROR: {
    key: 'USER_PASSWORD_ERROR',
    name: '用户名或密码错误',
    code: 10002
  },
  USER_EXIST: {
    key: 'USER_EXIST',
    name: '用户已存在',
    code: 10003
  },
  USER_NOT_LOGIN: {
    key: 'USER_NOT_LOGIN',
    name: '用户未登录',
    code: 10004
  },
  TOKEN_ERROR: {
    key: 'TOKEN_ERROR',
    name: 'token认证失败',
    code: 30001
  },
  TOKEN_EXPIRED: {
    key: 'TOKEN_EXPIRED',
    name: 'token过期',
    code: 30007
  },
  INVALID_PARAM: {
    key: 'INVALID_PARAM',
    name: '参数错误',
    code: 40001
  },
  NOT_FOUND: {
    key: 'NOT_FOUND',
    name: '资源不存在',
    code: 40401
  },
  SUCCESS_CODE: {
    key: 'SUCCESS_CODE',
    name: 'success',
    code: 0
  },
  ERROR_CODE: {
    key: 'ERROR_CODE',
    name: 'error',
    code: -1
  }
}

const CODES_NAME = {}
for (const key in CODES) {
  CODES_NAME[key] = CODES[key].key
}

module.exports = {
  CODES,
  CODES_NAME
}
