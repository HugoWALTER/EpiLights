const state = require('./state.js')();

module.exports = () => {
    return {
        setLight: (planning, led) => {
            let time = new Date();
	    
	    console.log(planning);
            Array.from(new Set(planning.map(v => v.room))).forEach(roomName => {
                inThisRoomCourses = planning.filter(elem => elem.room == roomName)
                occupedRoomCourses = inThisRoomCourses.filter(elem => {
                    let start = new Date(elem.start);
                    let end = new Date(elem.end);
                    return (time >= start && time < end)
                });
                soonOccupedRoomCourses = inThisRoomCourses.filter(elem => {
                    let start = new Date(elem.start);
                    let before = new Date(start.getTime() - 30 * 60000);
                    return (time >= before && time < start)
                });
                if (occupedRoomCourses.length > 0) {
                    state.busy(roomName, led);
                    console.log(`La salle ${roomName} est occupée`);
                } else if (soonOccupedRoomCourses.length > 0) {
                    state.intermediate(roomName, led);
                    console.log(`La salle ${roomName} va être occupée dans moins de 30 minutes`);
                } else {
                    state.free(roomName, led)
                    console.log(`La salle ${roomName} est libre`);
                }
            })
        }
    }
}
