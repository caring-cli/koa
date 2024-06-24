/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:54:56
 * @Description:
 */
const router = new (require('@koa/router'))()
const { index, upload } = require('../controllers/home')

const { basicAuth } = require('../middleware/auth.js')

router.get('/', index)

// 文件上传
router.post('/upload', basicAuth, upload)

module.exports = router
