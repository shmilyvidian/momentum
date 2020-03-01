const Router = require('koa-router');
const router = new Router();

const user_controller = require('../controller/userController');

router.post('/register', user_controller.resigter);

router.get('/getUserInfo', user_controller.getUserInfo);

module.exports = router;