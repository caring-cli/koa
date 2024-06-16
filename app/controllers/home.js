/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:36:23
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 14:50:31
 * @Description:
 */
class HomeCtl {
  async index(ctx) {
    ctx.body = '<h1>Hello World</h1>'
  }
}
module.exports = new HomeCtl()
