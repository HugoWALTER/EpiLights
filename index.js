const led = require('./manager/led.js')()
const light = require('./manager/light.js')()
const planning = require('./json/index.js')()

function refreshPlanning() {
	setInterval(() => {
		planning
			.getPlanning()
			.then((p) => {
				Promise.all([led.init()]).then((led) => {
					return light.setLight(p, led)
				})
			})
			.catch((err) => {
				console.error(err)
			})
	}, 60000)
}

refreshPlanning()
