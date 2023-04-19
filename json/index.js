const api = require('./api')()
const fs = require('fs')
const config = require('./../config.json')

const token = process.env.EPILIGHTTOKEN

module.exports = () => {
	return {
		getPlanning: () => {
			return Promise.all([api.getUser(token)])
				.then((user) => api.getPlanning(token, user[0]))
				.then((planning) => {
					const rooms = api.getRoom(planning)
					let json = []
					Object.values(rooms).forEach((roomName) => {
						json.push({
							start: roomName.start,
							end: roomName.end,
							room: roomName.room.code.split('/')[3],
						})
					})
					Object.values(config).forEach((roomName) => {
						if (api.getRoomIdx(json, roomName) == -1)
							json.push({ start: new Date(), end: new Date(), room: roomName.name })
					})
					fs.writeFileSync(
						'/home/pi/EpiLight/test/fixtures/room.json',
						JSON.stringify(json),
						'utf8',
					)
					return json
				})
				.catch((err) => {
					console.error(err)
					if (err) throw err
					return fs.readFile(
						'/home/pi/EpiLight/test/fixtures/room.json',
						'utf8',
						(err, data) => {
							if (err) throw err
							return JSON.parse(data)
						},
					)
				})
		},
	}
}
