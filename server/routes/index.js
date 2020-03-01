import Router from 'koa-router'
import User from './user'

const router = new Router();

export default (app) => {
    router.use('/user', User.routes(), User.allowedMethods())
    /* 路由注册 */
    app.use(router.routes(), router.allowedMethods())
}