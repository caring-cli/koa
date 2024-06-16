/*
 * @Author: Wanko
 * @Date: 2024-04-04 16:33:17
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-16 09:10:36
 * @Description:
 */
const app = new (require('koa'))()

const {needDb} = require('./config')
needDb && require('./db')

require('./routes')(app)

app.listen(3000, () => console.log('启动应用成功：http://localhost:3000'))
