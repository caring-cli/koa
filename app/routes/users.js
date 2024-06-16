/*
 * @Author: Wanko
 * @Date: 2024-04-04 18:27:53
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 18:54:53
 * @Description:
 */
const router = new (require('@koa/router'))({ prefix: '/users' })

const { find, findById, create, update, del, login, refresh } = require('../controllers/users.js')
const { auth, authRefresh } = require('../middleware/auth.js')
router.get('/', find)
router.get('/:id', findById)
router.post('/', create)
router.put('/:id', auth, update)
router.del('/:id', auth, del)
router.post('/login', login)
router.post('/refresh', authRefresh, refresh)

module.exports = router
