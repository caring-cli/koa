/*
 * @Author: Wanko
 * @Date: 2024-04-11 14:48:50
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 18:55:43
 * @Description:自定义错误处理中间件
 */

const { response } = require('../utils/Response')
const { CODES_NAME } = require('../utils/constant')

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    if (error.code === 'INVALID_PARAM') {
      response(ctx, CODES_NAME.INVALID_PARAM, error.errors)
    } else if (error.name === 'CastError') {
      ctx.body = new ErrorResponse('无效的 ID 格式，请确保传入正确的 ObjectId')
    } else if (error.name === 'UnauthorizedError') {
      if ( error.originalError?.name === 'TokenExpiredError') {
        response(ctx, CODES_NAME.TOKEN_EXPIRED)
      } else {
        response(ctx, CODES_NAME.TOKEN_ERROR)
      }
    }else {
      throw error
    }
  }
}
