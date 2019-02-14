# EPILIGHT 
> The second innovation project in EPITECH. 🆕 🎉.<br>

> This project was made in NodeJS and combined with a Raspberry PI3 with <3 by Hugo WALTER, Kévin FERCHAUD, Clément DA-PURIFICACAO and Maxime BOURMAUD
 
## What is it?

EPILIGHT is a system able to connect to the EPITECH Intranet and display a light whether a room is free or taken in the 2 stages in EPITECH NANTES.<br>
 
**Current features:**

- Auto rebooting of the raspberry.
- Auto call to the EPITECH API and GET a Json at every hours with crontab -e.
- Auto refresh every 5 minutes whether the Intranet is down.

Colours of the light:

- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) : The room will be occupied in 30 minutes.
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) : The room is occupied. (An activity is currently in this room).
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) : The room is free.

## Requirement

* Last version of NodeJS.
* Libraries
	* [Axios](https://www.npmjs.com/package/axios) v0.8
 

## Build Setup

Just about everything you need is setup for you.

-   Import the project into the Raspberry and unzip it.
-	Set an internet connection to IONIS or plug it in ethernet.
-	Copy launch.sh in the root of your raspberry and add this line in the .bashrc "./launch.sh" and please make that a terminal launch automatically after a reboot (on a RPI3 , add @lxterminal in the auto-start file)
-	Get your autolog at this adress (https://intra.epitech.eu/admin/autolog) and replace the token in "YOUR_AUTOLOG_HERE" var in json/index.js.
All the job will be done for you !

In case of index.js in the light repository doesn't work after a successful reboot :
- Launch get_rooms.sh at the root of the EpiLight repository
- Please go in the Light repository and launch this command: "sudo node index.js" and let the script run.

In case of crontab failed :
- Set this line after doing a crontab -e  -> 0 * * * * "$(command -v bash)" -c 'cd /home/pi/EpiLight && sudo ./get_rooms.sh'

## PROJECT DOCUMENTATION

Inside the repository, you can find some files :
The JSON folder will contain: 
- Call to the Epitech API

The Light folder will contain:

- Each connection associed to the light and the room.

## License

This project is the property of EPITECH.
