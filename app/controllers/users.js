/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:41:43
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:36:11
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
      username: 'string',
      password: 'string'
    })
    const { username } = ctx.request.body
    const hasUser = await User.findOne({ username })
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
      username: 'string',
      password: 'string'
    })
    const user = await User.findOne(ctx.request.body)
    if (!user) return response(ctx, CODES_NAME.USER_PASSWORD_ERROR)
    const { _id, username } = user
    const token = signToken({ _id, username })
    const refreshToken = signRefreshToken({ _id, username })

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
