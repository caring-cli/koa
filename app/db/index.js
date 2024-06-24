/*
 * @Author: Wanko
 * @Date: 2024-04-05 16:34:39
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-17 21:14:43
 * @Description:
 */
const mongoose = require('mongoose')
const { CONNECT_STR } = require('../config')

console.log(CONNECT_STR)
mongoose
  .connect(CONNECT_STR)
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.error('数据库连接出错:', err))
