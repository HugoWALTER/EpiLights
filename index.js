const led = require('./manager/led.js')();
const light = require('./manager/light.js')();
const planning = require('./json/index.js')();

function refreshPlanning() {
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
	}, 60000);
}

refreshPlanning();

