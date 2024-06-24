/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:36:23
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:27:49
 * @Description:
 */

const {FILE_DIR} = require('../config')

const { response } = require('../utils/Response')
class HomeCtl {
  async index(ctx) {
    ctx.body = '<h1>Hello World</h1>'
  }
  async upload(ctx) {
    const file = ctx.request.files.file
    const { newFilename } = file
    const url = `${FILE_DIR}/${newFilename}` 
    response(ctx, url)
  }
}
module.exports = new HomeCtl()