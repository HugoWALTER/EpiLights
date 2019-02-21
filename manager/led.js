const Gpio = require('pigpio').Gpio;

module.exports = () => {
    return {
        init: () => {
            return [
                {
                    red: new Gpio(16, {mode: Gpio.OUTPUT}),
                    green: new Gpio(20, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(21, {mode: Gpio.OUTPUT})
                },
                {
                    red: new Gpio(26, {mode: Gpio.OUTPUT}),
                    green: new Gpio(19, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(13, {mode: Gpio.OUTPUT}),
                },
                {
                    red: new Gpio(12, {mode: Gpio.OUTPUT}),
                    green: new Gpio(6, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(5, {mode: Gpio.OUTPUT}),
                },
                {
                    red: new Gpio(25, {mode: Gpio.OUTPUT}),
                    green: new Gpio(24, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(23, {mode: Gpio.OUTPUT}),
                },
                {
                    red: new Gpio(17, {mode: Gpio.OUTPUT}),
                    green: new Gpio(27, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(22, {mode: Gpio.OUTPUT}),
                },
                {
                    red: new Gpio(18, {mode: Gpio.OUTPUT}),
                    green: new Gpio(4, {mode: Gpio.OUTPUT}),
                    blue: new Gpio(10, {mode: Gpio.OUTPUT}),
                },
	    ]
        }
    }
}
