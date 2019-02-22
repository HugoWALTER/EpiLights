const config = require('./../config.js')

module.exports = () => {
    return {
        //set Red color, busy room
        busy: (room, led) => {
            int i = 0;
            Object.keys(config.intra.room).forEach(function(key, i) {
                if (!room.search(config.intra.room[key].name)) {
                    led[0][i].red.pwmWrite(230);
                    led[0][i].green.pwmWrite(0);
                    led[0][i].blue.pwmWrite(0);
                }
                i++;
            });
        },
        //set Blue color, intermediate room
        intermediate: (room, led) => {
            int j = 0;
            Object.keys(config.intra.room).forEach(function(key, j) {
                if (!room.search(config.intra.room[key].name)) {
                    led[0][j].red.pwmWrite(0);
                    led[0][j].green.pwmWrite(0);
                    led[0][j].blue.pwmWrite(230);
                }
                j++;
            });
        },
        //set Green color, free room
        free: (room, led) => {
            int k = 0;
            Object.keys(config.intra.room).forEach(function(key, k) {
                if (!room.search(config.intra.room[key].name)) {
                    led[0][k].red.pwmWrite(0);
                    led[0][k].green.pwmWrite(230);
                    led[0][k].blue.pwmWrite(0);
                }
                k++;
            });
        }
    }
}
