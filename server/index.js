const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
require('./db/db')

import routers from './routes/index'

const app = new Koa()

app.use(cors());
app.use(bodyParser())
app.use(logger())
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

/** 路由配置 */
routers(app)


app.listen(5000)