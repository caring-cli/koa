/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-04 18:39:45
 * @Description:
 */
const router = new (require('@koa/router'))()
const { index } = require('../controllers/home')

router.get('/', index)

module.exports = router
