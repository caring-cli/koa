/*
 * @Author: Wanko
 * @Date: 2023-09-15 15:08:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 16:11:22
 * @Description:
 */
const ENV = process.env.NODE_ENV

let debug
if (ENV === 'development') {
  debug = true
} else {
  debug = false
}
// debug = false

module.exports = debug

