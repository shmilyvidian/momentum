import Router from 'koa-router'
import User from './user'
import Weather from './weather'
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
const schema = require("../graphql/schema");
const router = new Router();

export default (app) => {
    router.use('/user', User.routes(), User.allowedMethods())
    router.use('/weather', Weather.routes(), Weather.allowedMethods())
    app.use(
        mount(
          "/graphql",
          graphqlHTTP({
            schema: schema,
            graphiql: true,
          })
        )
      );

    /* 路由注册 */
    app.use(router.routes(), router.allowedMethods())
}