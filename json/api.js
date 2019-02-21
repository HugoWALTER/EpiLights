const axios = require('axios')

const API = 'https://intra.epitech.eu';

function parseCalendarDate(epiDate) {
    const date = epiDate.replace(' ', '-').replace(/:/g, '-').split('-');
    return new Date(date[0], date[1] - 1, date[2], date[3], date[4]);
}

module.exports = () => {
    return {
	getUser: (token) => {
      return axios.get(`${API}/${token}/user/?format=json`)
        .then(res => res.data);
    },
    getPlanning: (token, user) => {
      const d = new Date();
      const dString = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      return axios.get(`${API}/${token}/planning/load?format=json&start=${dString}&end=${dString}`)
      .then(res => (Array.isArray(res.data) ? res.data : [])
          .filter(f => f.instance_location === user.location));
    },
    getRoom: (planning) => {
      const d = new Date();
      return planning.filter(f => f.room && f.room.code)
          .map((f) => {
              f.start = parseCalendarDate(f.start);
              f.end = parseCalendarDate(f.end);
              f.startString = `${f.start.getHours()}:${(`0${f.start.getMinutes()}`).substr(-2)}`;
              f.endString = `${f.end.getHours()}:${(`0${f.end.getMinutes()}`).substr(-2)}`;
              return f;
          }).filter(f => f.end > d)
          .sort((a, b) => a.start - b.start);
    },
    getRoomIdx: (json, roomName) => {
      for (let i = 0; i < json.length; i++) {
          if (json[i].room == roomName) {
              return i;
          }
      }
      return -1
    }
  }
}
