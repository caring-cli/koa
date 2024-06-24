/*
 * @Author: Wanko
 * @Date: 2024-04-04 16:33:17
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-17 19:47:40
 * @Description:
 */
const app = new (require('koa'))()
const {PORT} = require('./config')
const {needDb} = require('./config')
needDb && require('./db')

require('./routes')(app)

app.listen(PORT, () => console.log(`启动应用成功：http://localhost:${PORT}`))
