## Use OctoPrint with Siri and shortcuts with a Raspberry Pi and Node.js

![OctoPrint logo](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/OctoPrint.png)
![Plus](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/Plus.png)
![Siri logo](https://github.com/ArtCC/Octoprint-Siri-RPi/blob/develop/src_github/Siri.png)

With this project you will be able to control your 3D printer if you use OctoPrint as a print server with Siri from your iOS, iPadOS, macOS or HomePod using the Apple Shortcuts.

You will need a Raspberry Pi with OctoPrint and Node.js installed.

After following my tutorial you will be able to control by voice and Siri your 3D printer.

I'm an iOS developer from Madrid, Spain.

I hope you like the project, I'm open to all kind of help and modifications.

Thank you very much!

Arturo :)

### Configuration

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

### LICENSE

This project is free and use <b>CC BY-NC-SA</b>.

This license lets others remix, tweak, and build upon your work without for commercial purposes, as long as they credit you and license their new creations under the identical terms.

### THANK YOU!

I hope you like it!

##### ArtCC 2020++