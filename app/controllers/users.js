/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:41:43
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 18:59:24
 * @Description:
 */
const User = require('../models/users')
const { response } = require('../utils/Response')
const { CODES_NAME } = require('../utils/constant.js')
const { signToken, signRefreshToken } = require('../middleware/auth.js')

class UsersCtl {
  async find(ctx) {
    const users = await User.find()
    response(ctx, users)
  }
  async findById(ctx) {
    const user = await User.findById(ctx.params.id)
    if (!user) return response(ctx, CODES_NAME.USER_NOT_EXIST)
    response(ctx, user)
  }
  async create(ctx) {
    ctx.verifyParams({
      name: 'string',
      password: 'string'
    })
    const { name } = ctx.request.body
    const hasUser = await User.findOne({ name })
    // 409 冲突状态
    if (hasUser) return response(ctx, CODES_NAME.USER_EXIST) 
    const user = await new User(ctx.request.body).save('')
    response(ctx, user)
  }
  async update(ctx) {
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
      new: true
    })
    if (!user) return response(ctx, CODES_NAME.USER_NOT_EXIST)
    response(ctx)
  }
  async del(ctx) {
    const user = await User.findByIdAndDelete(ctx.params.id)
    if (!user) return response(ctx, CODES_NAME.USER_NOT_EXIST)
    response(ctx)
  }

  async login(ctx) {
    ctx.verifyParams({
      name: 'string',
      password: 'string'
    })
    console.log(ctx.request.body)
    const user = await User.findOne(ctx.request.body)
    if (!user) return response(ctx, CODES_NAME.USER_PASSWORD_ERROR)
    const { _id, name } = user
    const token = signToken({ _id, name })
    const refreshToken = signRefreshToken({ _id, name })

    const data = {
      user,
      token,
      refreshToken
    }
    response(ctx, data)
  }

  async refresh(ctx) {
    console.log(ctx.state)
    const { _id, name } = ctx.state.user

    const token = signToken({ _id, name })
    const refreshToken = signRefreshToken({ _id, name })

    response(ctx, {
      token,
      refreshToken
    })
  }
}

module.exports = new UsersCtl()
