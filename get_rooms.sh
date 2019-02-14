# !/bin/bash

cd json/
sed -i s/room.json/test.json/g index.js
npm start

if [ $(stat -c%s test.json) = 4 ]; then
    while [ $(stat -c%s test.json) -eq 4 ]
    do
        echo RETRYING...
        npm start
        sleep 300
    done
    sed -i s/test.json/room.json/g index.js
    npm start
    rm test.json
    echo Intra re-up, new JSON generate
else
    sed -i s/test.json/room.json/g index.js
    npm start
    rm test.json
    echo OK
fi
