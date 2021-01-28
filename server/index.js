const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
const koajwt = require('koa-jwt');
const { secret } = require('./constant/config')
require('./db/db')

import routers from './routes/index'
const app = new Koa()

app.use(cors());


app.use(bodyParser())
app.use(logger())
app.use(koajwt({ secret }).unless({
    // 注册接口不需要验证
    path: [
        /^\/user\/register/,
        // /^\/weather\/getWeather/
    ]
  }));


/** 路由配置 */
routers(app)


app.listen(5000)