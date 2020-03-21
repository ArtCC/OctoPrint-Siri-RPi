## Use OctoPrint with Siri and shortcuts with a Raspberry Pi and Node.js

With this project you will be able to control your 3D printer if you use OctoPrint as a print server with Siri from your iOS device, iPadOS, macOS or HomePod using the Apple Shortcuts.

You will need a Raspberry Pi (you can use the same one you use OctoPrint on) with Node.js installed.

After following my tutorial you will be able to control by voice and Siri your 3D printer.

I'm an iOS developer and this project came to my mind because of being at home quarantined by the COVID-19 virus.

I hope you like the project, I'm open to all kind of help and modifications.

Thank you very much!

Arturo.

### Configuration

- Install Raspbian in your Raspberry Pi (If you don't use the same OctoPrint Raspberry Pi):

[Raspbian official web](https://www.raspberrypi.org/downloads/raspbian/)

- You do not need to connect your Raspberry Pi to a monitor or keyboard, you will access it via SSH. To do so, you need to add your WiFi settings before inserting the card into your RPi.
Make sure the SD card with Raspbian is in your computer. You'll have to locate the boot directory, on my Mac it's in /Volumes/boot.

```
cd /Volumes/boot
```

Create a file in this directory called wpa_supplicant.conf. The file should contain the following details:

For Raspbian Jessie:

```
network={
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_PASSWORD"
    key_mgmt=WPA-PSK
}
```

For Raspbian Stretch and Raspbian Buster:

```
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_PASSWORD"
    key_mgmt=WPA-PSK
}
```

With this file in place, Raspbian will move it in /etc/wpa_supplicant/ when the system is booted.

- To be able to activate SSH on your Raspberry Pi, just create a file with the name ssh in the same location as the WiFi settings file, that will be active and you can connect via SSH.
- Now open your terminal on your MacBook (if you use Windows install Putty) and type:

```
ssh pi@RASPBERRY_IP
```

User pi and password for default is raspberry.

- Now you need install Node.js in your Raspberry Pi:

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
```

```
sudo apt install -y nodejs
```

### LICENSE

This project is free and use <b>CC BY-NC-SA</b>.

This license lets others remix, tweak, and build upon your work without for commercial purposes, as long as they credit you and license their new creations under the identical terms.

### THANK YOU!

I hope you like it!

##### ArtCC 2020++