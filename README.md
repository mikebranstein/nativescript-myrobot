# Overview

This project is a NativeScript app build for my kids' iPad mini, leveraging a text-to-speech
library to create a robot soundboard. 

# Motivation

On Saturday morning, my sons and I were casually watching several videos from Boston Dynamics. This drove the boys to build
their own robots out of cardboard, paper cups, glue, and duct tape. As we were building, my oldest son wanted his robot to
talk. A few minutes later, we sat down at my laptop, I told him about "code", and spun up a NativeScript app for his iPad. 
Combined with his [iGuy case](http://www.amazon.com/Speck-Products-Freestanding-Orange-SPK-A1227/dp/B007JGBD22/ref=sr_1_1?ie=UTF8&qid=1459045711&sr=8-1&keywords=iguy), 
the iPad became the robot's head. A simple text-to-speech plugin and a soundboard interface allows the boys to have their
robot come to life.

# Installation

You can download, compile, and run the app on your own, without installing from the app store 
by following these instructions.

## Prerequisites

Before geting started, please see the [official NativeScript documentation](http://docs.nativescript.org/getting-started#install-nativescript-and-configure-your-environment "NativeScriptDocs"). 
Node.js is a prerequisite of NativeScript. On OS X, it is recommended you install nvm to manage multiple
version of Node.js. Check out the [nvm repository](https://github.com/creationix/nvm "nvm") on Github for more details. 
All code examples below assume nvm is installed, using Nodejs verison 4.2.6.

epository

	git clone https://github.com/mikebranstein/nativescript-myrobot

## Restore Packages and Provision NativeScript Assets

The app does not include all files needed by NativeScript to build and run directly. To 
run the app, you'll need to restore the missing npm packages, install the missing NativeScript
platforms, prepare, then build. 

	nvm use 4.2.6

	cd nativescript-myrobot

	npm update
	tns prepare ios
	tns build ios
	tns run ios --emulator --device "iPad Retina"
  
After you launch the app, be sure to rotate the screen sideways.

# Contributors

If you are interested in contributing to the project, contact [Mike Branstein](mailto://mike@brosteins.com).

# License

Copyright (c) 2016 Mike Branstein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



