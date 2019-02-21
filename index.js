const led = require('./manager/led.js')();
const light = require('./manager/light.js')();
const planning = require('./json/index.js')();

planning.getPlanning()
    .then((p) => {
	return Promise.all([led.init()])
	    .then((led) => {
		return light.setLight(p, led)
	    })
    })
    .catch((err) => {
	console.log(err)
    });

setInterval(() => {
    planning.getPlanning()
    .then((p) => {
	return Promise.all([led.init()])
	    .then((led) => {
		return light.setLight(p, led)
	    })
    })
    .catch((err) => {
	console.log(err)
    });
}, 36000);
