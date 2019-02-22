const api = require('./api')();
const config = require ('./../config');

const token = process.env.EPILIGHTTOKEN;

module.exports = () => {
    return {
        getPlanning : () => {
            return Promise.all([api.getUser(token)])
		.then((user) => api.getPlanning(token, user[0]))
		.then((planning) => {
                const rooms = api.getRoom(planning);
                let json = [];

		    Object.values(rooms).forEach((roomName) => {
			json.push(  {start : roomName.start, end: roomName.end, room: roomName.room.code.split('/')[3]});	
		    });
            Object.values(config.intra.room).forEach((roomName) => {
			if (api.getRoomIdx(json, roomName) == -1)
                            json.push(  {start : new Date(), end: new Date(), room: roomName});	
		    });
            return json;
		}).catch((err) => {
		    console.log(err)
                if (err)
                    return [{}];
            });
        }
    }
}
