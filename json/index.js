var fs = require('fs');
const api = require('./api')

const token = 'YOUR_AUTOLOG_HERE';

const roomName = [
    'Mordor',
    'La-Comte',
    'Gotham',
    'Marty-McFly',
    'Gallifrey',
    'Westeros',
    'Torvalds',
    'Tatooine',
    'Poudlard',
    'Barney-Stinson',
    'Vogons',
];

Promise.all([api.getUser(token)])
.then((user) => api.getPlanning(token, user[0]))
.then((planning) => {
    var rooms = api.getRoom(planning);
    var json = [];
    for (idx = 0; idx < rooms.length; idx++) {
        json.push(  {start : rooms[idx].start, end: rooms[idx].end, room: rooms[idx].room.code.split('/')[3]});
    }
    for (idx = 0; idx < roomName.length; idx++) {
        if (api.indexOf(json, roomName[idx]) == -1)
            json.push(  {start : new Date(), end: new Date(), room: roomName[idx]});
    }
    fs.writeFileSync("room.json", JSON.stringify(json));
}).catch((err) => {
    var json = [{}];
    fs.writeFileSync("room.json", JSON.stringify(json));
});