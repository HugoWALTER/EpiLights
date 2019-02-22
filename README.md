# EPILIGHT 
> The second innovation project in EPITECH. 🆕 🎉.<br>

> This project was made in NodeJS and combined with a Raspberry PI3 with <3 by Hugo WALTER, Kévin FERCHAUD, Clément DA-PURIFICACAO and Maxime BOURMAUD
 
## What is it?

EPILIGHT is a system able to connect to the EPITECH Intranet and display a light whether a room is free or taken in the 2 stages in EPITECH NANTES.<br>
 
**Current features:**

- Auto rebooting of the raspberry.
- Auto call to the EPITECH API and GET a JSON at every hour.
- Auto refresh every 5 minutes whether the Intranet is down.

Colours of the light:

- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) : The room will be busy in 30 minutes.
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) : The room is busy. (An activity is currently in this room).
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) : The room is free.

## Requirement

* Last version of [NodeJS](https://nodejs.org/en/).
* Last version of [Git](https://git-scm.com/downloads).
* Libraries
	* [Axios](https://www.npmjs.com/package/axios) v0.8
	* [Pigpio](https://www.npmjs.com/package/pigpio) v1.2.1
 

## Build Setup

Just about everything you need is setup for you.

-	Set an internet connection to IONIS or plug it in ethernet.

``` bash

# Pull the project

$ git clone https://github.com/HugoWALTER/EpiLights.git

# Get your autolog at this address (https://intra.epitech.eu/admin/autolog) and replace the token into the service.

$ nano epilight.service and replace YOUR_TOKEN_HERE with your autolog

# Install dependencies

$ npm install
  
# Copy service into systemd

$ cp epilight.service /etc/systemd/system/epilight.service

# Enable service

$ systemctl enable epilight.service

# Start service

$ systemctl start epilight.service

```

All the job will be done for you !

## Troubleshooting 

In case of index.js in the EpiLights repository doesn't work after a successful reboot :
- Please check the status of the service ("systemctl status epilight.service")
- Please go in the Epilights repository and launch this command: "node index.js" and let the script run.

In case of the connection crashed :
- An auto-refresh condition is setup for you to call the intranet each minute to update the rooms.

A room is missing ?
- Only add the room in the config.js and setup GPIO port for the room 

## PROJECT DOCUMENTATION

Inside the repository, you can find some files :
The JSON folder will contain: 
- Call to the Epitech API

The Manager folder will contain:

- Each connection associated with the light and the room.

The config.js file will contain:

- Naming of the rooms in Epitech Nantes and their GPIO port