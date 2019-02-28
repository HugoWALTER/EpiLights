const config = require('./../config.json')

module.exports = () => {
    return {
        //set Red color, busy room
        busy: (room, led) => {
            let i = 0;
            Object.values(config).forEach(roomN => {
                if (!room.search(roomN.name)) {
                    led[0][i].red.pwmWrite(230);
                    led[0][i].green.pwmWrite(0);
                    led[0][i].blue.pwmWrite(0);
                }
                i++;
            });
        },
        //set Blue color, intermediate room
        intermediate: (room, led) => {
            let i = 0;
            Object.values(config).forEach(roomN => {
                if (!room.search(roomN.name)) {
                    led[0][i].red.pwmWrite(0);
                    led[0][i].green.pwmWrite(0);
                    led[0][i].blue.pwmWrite(230);
                }
                i++;
            });
        },
        //set Green color, free room
        free: (room, led) => {
            let i = 0;
            Object.values(config).forEach(roomN => {
                if (!room.search(roomN.name)) {
                    led[0][i].red.pwmWrite(0);
                    led[0][i].green.pwmWrite(230);
                    led[0][i].blue.pwmWrite(0);
                }
                i++;
            });
        }
    }
}
