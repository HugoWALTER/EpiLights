# !/bin/bash

cd /home/pi/EpiLight/ && sudo ./get_rooms.sh
cd /home/pi/EpiLight/light && sudo node index.js
