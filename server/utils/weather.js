const request = require("request")
const cheerio = require("cheerio")
const weatherBASEURL = 'https://tianqi.moji.com/weather/china/Guangdong/'

// 获取墨迹天气提示信息
function getWeather(city) {
    const weatherURL = weatherBASEURL+city
    return new Promise((resolve,reject)=>{
        request(weatherURL,(error,res,body)=>{
          if (!error) {
            let html = res.body || "";
            let $ =cheerio.load(html)
            let temp = $('.wea_weather em').text().trim()+'℃'
            let desc = $('.wea_weather b').text().trim()
            let water = $('.wea_about span').text().trim()
            let win = $('.wea_about em').text().trim()
            let tips = $('.wea_tips em').text().trim()
            let words=`今日${city}天气\n${desc}\n温度：${temp}\n湿度：${water}\n风力：${win}\n${tips}`
            resolve(words)
        } else {
            reject(error)
        }      
      })
   })   
}


exports.getWeather = getWeather