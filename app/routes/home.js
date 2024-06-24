/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-24 17:29:50
 * @Description:
 */
const router = new (require('@koa/router'))()
const { index, upload } = require('../controllers/home')

const { auth } = require('../middleware/auth.js')

router.get('/', index)

// 文件上传
router.post('/upload', auth, upload)

module.exports = router
