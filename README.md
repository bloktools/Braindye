# Braindye
### by Riley Clos and Veer Patel.

Welcome! You have reached the GitHub page containing the source code for our 2026 Website Design project.

### Access Instructions

We have found that some organizations, especially schools, with web filters will automatically block our website. To get around this, we have a couple solutions:
*Always be mindful of what you do online. Feel free to look through our code.*

##### 1. Use a personal hotspot
	- If you have a cell phone plan that supports hotspots (which many do), you can turn it on in your settings and connect your computer to it. This will ensure that no web filters will prevent the website from being blocked by your ISP.
##### 2. Run a local web server from the source
	- Running a local web server is fairly straight forward. Instructions will differ depending on if your system uses Windows, Mac, or Linux.

###### Windows
Things you will need:
	- Node.js:
		If you do not already have node.js installed on your system, you can find it [here](https://nodejs.org/en/download). You can find the prebuilt binary at the bottom for convenience. If you know what you are doing, feel free to install however you would like.

And that's it! Be aware that you will have to download more dependencies before you can run the website, but node will do this for you.

**Directions**
	- Open a terminal by pressing your `Win` key and `R` key at the same time. Type `cmd` and press `Enter`.
	
	- Download the source code for the project from GitHub.
	
	- Navigate to the directory using `cd` in the format that follows:
	
	```cd your\file\path\```
	
		- Depending on where you saved the file and where your terminal is open, you will have to change the directory you choose. Typically, it will be in `C:\Users\<name>\Downloads\Braindye\`
		
	- Type `dir` and press `Enter`. Make sure you see `package.json` in that list.
	
	- Run `npm install`, and wait for it to finish.
	
	- Now, run `npm run dev` and wait until it lets you know the server is started.
	
	- Hold down `Ctrl` and press the link that appears in the terminal. If this does not work, manually type that link into the address bar of whichever browser you prefer (including the colon and the numbers after).
	
	
###### Mac/Linux
Things you will need:
	- Node.js:
	
		If you do not already have node.js installed on your system, you can find it [here](https://nodejs.org/en/download). You can find the prebuilt binary at the bottom for convenience. If you know what you are doing, feel free to install however you would like.
	*Note to Mac users: If your device was made in 2020 or later, make sure you select "ARM64" for the architecture.*

And that's it! Be aware that you will have to download more dependencies before you can run the website, but node will do this for you.

**Directions:**
	- Open a terminal window. On mac, this will be found in the Utilities folder in your launchpad. Or, press `Cmd` + `Space` and type terminal, then open it there. Linux users will vary by distro, and I am assuming if you use linux that you have a basic understanding of your operating system and the command line.
	
	- Download the source code for the project. You can either download it from GitHub using the "Clone" button, or use `git clone` in the command line.
	
	- Navigate to the directory where it is downloaded using `cd /your/file/path/`
	
		- Typically, this will be in `~/Downloads/Braindye/`
		
	- Type `ls` and press `Enter`. Make sure you see `package.json` in that list.
	
	- Run `npm install` and wait for it to finish.
	
	- Now, run `npm run dev` and wait until it lets you know the server is started.
	
	- Open the link in the terminal, it should be `localhost:port`. Make sure you include the port in the url.
	
