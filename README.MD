# Use OctoPrint with Siri and shortcuts with a Raspberry Pi and Node.js

![OctoPrint logo](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/OctoPrint.png)
![Plus](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/Plus.png)
![Siri logo](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/Siri.png)

(I'm sorry but I don't have a 3D printer anymore...)

With this project you will be able to control your 3D printer if you use OctoPrint as a print server with Siri from your iOS, iPadOS, macOS or HomePod using the Apple Shortcuts.

You will need a Raspberry Pi with OctoPrint and Node.js installed.

After following my tutorial you will be able to control by voice and Siri your 3D printer.

I'm an iOS developer from Madrid, Spain.

I hope you like the project, I'm open to all kind of help and modifications.

Thank you very much!

Arturo :)

## Configuration

- Install and configure OctoPrint in your Raspberry Pi for your 3D printer:

	- [OctoPrint official web](https://octoprint.org)

- With OctoPrint installed and connected to your network, open your terminal on your MacBook (if you use Windows use [Putty](https://putty.org)) and type (User for default: <b>pi</b> and password for default: <b>raspberry</b>):

```
ssh pi@OCTOPRINT_IP
```

- Now, you need install Node.js in your Raspberry Pi with OctoPrint:

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
```

```
sudo apt install -y nodejs
```

- Now, you need to install nodemon to leave the REST API up:

```
sudo npm install -g nodemon
```

- Download and unzip in your MacBook or another pc this file:

[Source](https://github.com/ArtCC/OctoPrint-Siri-RPi/blob/master/source/OctoPrint-Siri-RPi.zip)

- Open config.js file and add your OctoPrint API KEY in this constant:

```
const API_KEY = 'YOUR_OCTOPRINT_API_KEY';
```

- Use FileZilla or another application to transfer this folder to your Raspberry Pi with OctoPrint. If you use FileZilla use this setting to connect to your OctoPrint server:

```
sftp://OCTOPRINT_IP
user: pi
password: raspberry
```

- Now, go back to your OctoPrint terminal connected by SSH and run the following script, your new intermediate API for using Apple Shortcuts will be up and running:

```
./start.sh
```

- Close the terminal with OctoPrint without canceling nodemon.

## Siri shortcuts

Add these shortcuts by opening the link on your iOS or iPadOS device where you have installed the Shortcuts application. They are in Spanish but you can modify the texts when you add them to your application.

[Download Shortcuts examples with captures](https://github.com/ArtCC/OctoPrint-Siri-RPi/blob/develop/src_github/Shortcuts_captures.zip)

## Notes

It is a first version of the project, I will be improving both the installation and the operation in general.
Why have I decided not to use the OctoPrint API directly from Shortcuts? To have the possibility of empowering my likes to the service and to not complicate the configuration of each Shortcut.

## LICENSE

This project is free and use <b>CC BY-NC-SA</b>.

This license lets others remix, tweak, and build upon your work without for commercial purposes, as long as they credit you and license their new creations under the identical terms.

## THANK YOU!

I hope you like it!

##### ArtCC 2020++
