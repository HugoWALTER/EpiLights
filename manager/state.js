const config = require('./../config.js')

module.exports = () => {
    return {
        busy: (room, led) => {
            if (!room.search(config.intra.room.mordor)) {
        	led[0][0].red.pwmWrite(230);
                led[0][0].green.pwmWrite(0);
                led[0][0].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.comte)) {
                led[0][1].red.pwmWrite(230);
                led[0][1].green.pwmWrite(0);
                led[0][1].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.gallifrey)) {
                led[0][2].red.pwmWrite(230);
                led[0][2].green.pwmWrite(0);
                led[0][2].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.tatooine)) {
                led[0][3].red.pwmWrite(230);
                led[0][3].green.pwmWrite(0);
                led[0][3].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.torvalds)) {
                led[0][4].red.pwmWrite(230);
                led[0][4].green.pwmWrite(0);
                led[0][4].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.westeros)) {
                led[0][5].red.pwmWrite(230);
                led[0][5].green.pwmWrite(0);
                led[0][5].blue.pwmWrite(0);
            }
        },
        intermediate: (room, led) => {
            if (!room.search(config.intra.room.mordor)) {
                led[0][0].red.pwmWrite(0);
                led[0][0].green.pwmWrite(0);
                led[0][0].blue.pwmWrite(230);
            }
            if (!room.search(config.intra.room.comte)) {
                led[0][1].red.pwmWrite(0);
                led[0][1].green.pwmWrite(0);
                led[0][1].blue.pwmWrite(230);
            }
            if (!room.search(config.intra.room.gallifrey)) {
                led[0][2].red.pwmWrite(0);
                led[0][2].green.pwmWrite(0);
                led[0][2].blue.pwmWrite(230);
            }
            if (!room.search(config.intra.room.tatooine)) {
                led[0][3].red.pwmWrite(0);
                led[0][3].green.pwmWrite(0);
                led[0][3].blue.pwmWrite(230);
            }
            if (!room.search(config.intra.room.torvalds)) {
                led[0][4].red.pwmWrite(0);
                led[0][4].green.pwmWrite(0);
                led[0][4].blue.pwmWrite(230);
            }
            if (!room.search(config.intra.room.westeros)) {
                led[0][5].red.pwmWrite(0);
                led[0][5].green.pwmWrite(0);
                led[0][5].blue.pwmWrite(230);
            }
        },
        free: (room, led) => {
            if (!room.search(config.intra.room.mordor)) {
                led[0][0].red.pwmWrite(0);
                led[0][0].green.pwmWrite(230);
                led[0][0].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.comte)) {
                led[0][1].red.pwmWrite(0);
                led[0][1].green.pwmWrite(230);
                led[0][1].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.gallifrey)) {
                led[0][2].red.pwmWrite(0);
                led[0][2].green.pwmWrite(230);
                led[0][2].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.tatooine)) {
                led[0][3].red.pwmWrite(0);
                led[0][3].green.pwmWrite(230);
                led[0][3].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.torvalds)) {
                led[0][4].red.pwmWrite(0);
                led[0][4].green.pwmWrite(230);
                led[0][4].blue.pwmWrite(0);
            }
            if (!room.search(config.intra.room.westeros)) {
                led[0][5].red.pwmWrite(0);
                led[0][5].green.pwmWrite(230);
                led[0][5].blue.pwmWrite(0);
            }
        }
    }
}
