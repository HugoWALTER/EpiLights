const Gpio = require('pigpio').Gpio;
const config = require('./../config.json');

module.exports = () => {
    return {
        init: () => {
            let rooms = [];
            Object.values(config).forEach((roomName) => {
		   rooms.push(
                    {
                        red: new Gpio(roomName.gpio['R'], {mode: Gpio.OUTPUT}),
                        green: new Gpio(roomName.gpio['G'], {mode: Gpio.OUTPUT}),
                        blue: new Gpio(roomName.gpio['B'], {mode: Gpio.OUTPUT})
                    });
            });
            return rooms;
        }
    }
}
