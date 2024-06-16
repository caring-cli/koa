/*
 * @Author: Wanko
 * @Date: 2024-04-11 14:10:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 17:45:32
 * @Description:
 */
const { CODES, CODES_NAME } = require('./constant.js')

class BaseResponse {
  constructor(data, message = 'success') {
    this.code = 0
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) this.data = data
    if (message) this.message = message
  }
}

class SuccessResponse extends BaseResponse {
  constructor(data, message = 'success') {
    super(data, message)
    this.code = CODES.SUCCESS_CODE.code
  }
}

class ErrorResponse extends BaseResponse {
  constructor(message = 'fail', code = CODE.ERROR_CODE.code, errors = null) {
    super(message)
    this.code = code
    if (errors) this.errors = errors
  }
}
const response = (ctx, ...args) => {
  const CODE_NAME_MAP = Object.keys(CODES_NAME)
  console.log('response', args, args[0])
  if (typeof args[0] === 'string' && CODE_NAME_MAP.includes(args[0])) {
    // 返回错误响应
    console.log('返回错误响应')
    const codeName = args[0]
    const codeErrors = args[1]
    // console.log(CODES[codeName].name, CODES[codeName].code, codeErrors, '---')
    ctx.body = new ErrorResponse(CODES[codeName].name, CODES[codeName].code, codeErrors)
  } else {
    ctx.body = new SuccessResponse(...args)
  }
}

const error = (ctx, codeName) => {
  ctx.throw(CODE[codeName], codeName)
}

module.exports = {
  response,
  error,
}
