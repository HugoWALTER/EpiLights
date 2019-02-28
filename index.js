const led = require('./manager/led.js')();
const light = require('./manager/light.js')();
const planning = require('./json/index.js')();

function refreshPlanning() {
	setInterval(() => {
		planning.getPlanning()
		.catch((err) => {
		console.log(err)
		});
	}, 60000);
}

refreshPlanning();

