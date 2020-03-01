import Router from 'koa-router'
import User from './user'
import Weather from './weather'

const router = new Router();

export default (app) => {
    router.use('/user', User.routes(), User.allowedMethods())
    router.use('/weather', Weather.routes(), Weather.allowedMethods())

    /* 路由注册 */
    app.use(router.routes(), router.allowedMethods())
}