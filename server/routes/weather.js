const Router = require('koa-router');
const router = new Router();

const weather_controller = require('../controller/weatherController');

router.get('/getWeather', weather_controller.getWeatherMessage);


module.exports = router;