const weather = require('../utils/weather') 
const getWeatherMessage = async (ctx, next) => {
    console.log(city,'city')

    const { city  } = ctx.query
    if(!city) {
        ctx.status = 400
        ctx.body = {
            code: 400,
            message: '参数不合法',
            data: false
        } 
        return
    }
    const docs = await weather.getWeather(city)

    if(docs){
        ctx.status = 200
        ctx.body = {
            code: 200,
            message: '获取天气信息成功',
            data: docs
        }
    }else{
        ctx.status = 400
        ctx.body = {
            code: 400,
            message: '获取天气信息失败',
            data: false
        } 
        return
    }
}
module.exports = {
    getWeatherMessage
}
