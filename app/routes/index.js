/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:40
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:28:00
 * @Description:
 */
const fs = require('fs')
const { koaBody } = require('koa-body')

const cors = require('koa-cors')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const errorMid = require('../middleware/error')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const dayjs = require('dayjs')
dayjs().unix
const { LOCAL_STATIC_PATH, UPLOAD_DIR } = require('../config')
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

  app.use(
    koaStatic(LOCAL_STATIC_PATH, {
      gzip: true
    })
  )
  app.use(
    koaBody({
      multipart: true,
      formidable: {
        uploadDir: UPLOAD_DIR,
        keepExtensions: true,
        onFileBegin: (name, file) => {
          let fileName = file.originalFilename
          let filePath = `${UPLOAD_DIR}/${fileName}`
          if (fs.existsSync(filePath)) {
            const time = dayjs().format('YYYYMMDDHHmmss')
            fileName = `${time}-${fileName}`
            filePath = `${UPLOAD_DIR}/${fileName}`
          }
          file.newFilename = fileName
          file.path = filePath
          file.filepath = filePath
        }
      }
    })
  )

  // console.log(path.join(__dirname, STATIC_PATH))

  app.use(cors())
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
