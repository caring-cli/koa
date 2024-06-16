/*
 * @Author: Wanko
 * @Date: 2024-04-12 15:50:24
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-12 16:03:05
 * @Description:
 */
module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true,
    es6: true
  }
}
