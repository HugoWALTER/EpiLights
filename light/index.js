const fs = require('fs')

var Gpio = require('pigpio').Gpio;

var led = [
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

//Color Green (0, 230, 0)
//Color Blue (0, 0, 230)
//Color Red (230, 0, 0)

var rooms = {
    mordor: "Mordor",
    comte: "La-Comte",
    gotham: "Gotham",
    marty: "Marty-McFly",
    gallifrey: "Gallifrey",
    westeros: "Westeros",
    torvalds: "Torvalds",
    tatooine: "Tatooine",
    poudlard: "Poudlard",
    barney: "Barney-Stinson",
    vogons: "Vogons",
};

function occupedRoom (rooms, room, led) {
    if (!room.search(rooms.mordor)) {
	led[0].red.pwmWrite(230);
        led[0].green.pwmWrite(0);
        led[0].blue.pwmWrite(0);
    }
    if (!room.search(rooms.comte)) {
        led[1].red.pwmWrite(230);
        led[1].green.pwmWrite(0);
        led[1].blue.pwmWrite(0);
    }
    if (!room.search(rooms.gallifrey)) {
        led[2].red.pwmWrite(230);
        led[2].green.pwmWrite(0);
        led[2].blue.pwmWrite(0);
    }
    if (!room.search(rooms.tatooine)) {
        led[3].red.pwmWrite(230);
        led[3].green.pwmWrite(0);
        led[3].blue.pwmWrite(0);
    }
    if (!room.search(rooms.torvalds)) {
        led[4].red.pwmWrite(230);
        led[4].green.pwmWrite(0);
        led[4].blue.pwmWrite(0);
    }
    if (!room.search(rooms.westeros)) {
        led[5].red.pwmWrite(230);
        led[5].green.pwmWrite(0);
        led[5].blue.pwmWrite(0);
    }
}

function soonOccupedRoom (rooms, room, led) {
    if (!room.search(rooms.mordor)) {
        led[0].red.pwmWrite(0);
        led[0].green.pwmWrite(0);
        led[0].blue.pwmWrite(230);
    }
    if (!room.search(rooms.comte)) {
        led[1].red.pwmWrite(0);
        led[1].green.pwmWrite(0);
        led[1].blue.pwmWrite(230);
    }
    if (!room.search(rooms.gallifrey)) {
        led[2].red.pwmWrite(0);
        led[2].green.pwmWrite(0);
        led[2].blue.pwmWrite(230);
    }
    if (!room.search(rooms.tatooine)) {
        led[3].red.pwmWrite(0);
        led[3].green.pwmWrite(0);
        led[3].blue.pwmWrite(230);
    }
    if (!room.search(rooms.torvalds)) {
        led[4].red.pwmWrite(0);
        led[4].green.pwmWrite(0);
        led[4].blue.pwmWrite(230);
    }
    if (!room.search(rooms.westeros)) {
        led[5].red.pwmWrite(0);
        led[5].green.pwmWrite(0);
        led[5].blue.pwmWrite(230);
    }
}

function freeRoom (rooms, room, led) {
    if (!room.search(rooms.mordor)) {
        led[0].red.pwmWrite(0);
        led[0].green.pwmWrite(230);
        led[0].blue.pwmWrite(0);
    }
    if (!room.search(rooms.comte)) {
        led[1].red.pwmWrite(0);
        led[1].green.pwmWrite(230);
        led[1].blue.pwmWrite(0);
    }
    if (!room.search(rooms.gallifrey)) {
        led[2].red.pwmWrite(0);
        led[2].green.pwmWrite(230);
        led[2].blue.pwmWrite(0);
    }
    if (!room.search(rooms.tatooine)) {
        led[3].red.pwmWrite(0);
        led[3].green.pwmWrite(230);
        led[3].blue.pwmWrite(0);
    }
    if (!room.search(rooms.torvalds)) {
        led[4].red.pwmWrite(0);
        led[4].green.pwmWrite(230);
        led[4].blue.pwmWrite(0);
    }
    if (!room.search(rooms.westeros)) {
        led[5].red.pwmWrite(0);
        led[5].green.pwmWrite(230);
        led[5].blue.pwmWrite(0);
    }
}

function setLight (rooms, led) {
    var planning = JSON.parse(fs.readFileSync('./../json/room.json'))
    var time = new Date();
    
    console.log(time);
    console.log(planning)
    Array.from(new Set(planning.map(v => v.room))).forEach(roomName => {
        inThisRoomCourses = planning.filter(elem => elem.room == roomName)
        occupedRoomCourses = inThisRoomCourses.filter(elem => {
            var start = new Date(elem.start);
            var end = new Date(elem.end);
            return (time >= start && time < end)
        });
        soonOccupedRoomCourses = inThisRoomCourses.filter(elem => {
            var start = new Date(elem.start);
            var end = new Date(elem.end);
            var before = new Date(start.getTime() - 30 * 60000);
            return (time >= before && time < start)
        });
        if (occupedRoomCourses.length > 0) {
            occupedRoom(rooms, roomName, led);
            console.log(`La salle ${roomName} est occupée`);
        } else if (soonOccupedRoomCourses.length > 0) {
            soonOccupedRoom(rooms, roomName, led);
            console.log(`La salle ${roomName} va être occupée dans moins de 30 minutes`);
        } else {
            freeRoom(rooms, roomName, led);
            console.log(`La salle ${roomName} est libre`);
        }
    })
    setTimeout(() => {
        setLight(rooms, led);
    }, 60000)
}

setLight(rooms, led);
