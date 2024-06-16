/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:40
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 17:45:19
 * @Description:
 */
const fs = require('fs')
const { bodyParser } = require('@koa/bodyparser')
const cors = require('koa-cors')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const errorMid = require('../middleware/error')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const path = require('path')
module.exports = (app) => {
  app.use(
    error({
      postFormat: (e, { stack, message, status: code }) => {
        // console.log(e, code, '---')
        return process.env.NODE_ENV === 'production'
          ? {
              code,
              message
            }
          : { stack, code, message }
      }
    })
  )
  

  app.use(koaStatic(path.join(__dirname, '/../public')))
  // console.log(path.join(__dirname, 'public'))
  app.use(cors())
  app.use(bodyParser())
  app.use(parameter(app))
  app.use(logger())
  app.use(errorMid)
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return
    const route = require(`./${file}`)
    app.use(route.routes())
    app.use(route.allowedMethods())
  })
}
