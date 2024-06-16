/*
 * @Author: Wanko
 * @Date: 2023-09-15 15:08:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-12 14:37:57
 * @Description:
 */
const ENV = process.env.NODE_ENV

if (ENV === 'development') {
  module.exports = true
} else {
  module.exports = false
}
