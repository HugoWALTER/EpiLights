const Gpio = require('pigpio').Gpio;
const config = require('./../config.js');

module.exports = () => {
    return {
        init: () => {
            var rooms = [];
            Object.keys(config.intra.room).forEach(function(key, rooms) {
                rooms.push(
                    {
                        red: new Gpio(config.intra.room[key].gpio["R"], {mode: Gpio.OUTPUT}),
                        green: new Gpio(config.intra.room[key].gpio["G"], {mode: Gpio.OUTPUT}),
                        blue: new Gpio(config.intra.room[key].gpio["B"], {mode: Gpio.OUTPUT})
                    });
            });
            return rooms;
        }
    }
}
