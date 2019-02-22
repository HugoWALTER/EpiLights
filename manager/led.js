const Gpio = require('pigpio').Gpio;
const Epirooms = require('./../config.js');

module.exports = () => {
    return {
        init: () => {
            var rooms = [];
            Object.keys(Epirooms.intra.room).forEach(function(key, rooms) {
                rooms.push(
                    {
                        red: new Gpio(Epirooms.intra.room[key].gpio["R"], {mode: Gpio.OUTPUT}),
                        green: new Gpio(Epirooms.intra.room[key].gpio["G"], {mode: Gpio.OUTPUT}),
                        blue: new Gpio(Epirooms.intra.room[key].gpio["B"], {mode: Gpio.OUTPUT})
                    });
            });
            return rooms;
        }
    }
}
