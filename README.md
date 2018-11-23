# Marfeel Technical Test

*November 2018*

## Project Overview

### Goal

* Create a client side web application that reproduces the screen shot below.

![Marfeel Technical Test](http://dev.ericdelerue.com/marfeel/img/marfeel-test.png)

### Tasks

- Produce a reusable component (View) connected to 3 different data models
- Produce a reliable and unit tested code (we recommend Jasmine)
- There's a clear separation of concerns between different layers (presentation, data...) In order to do that, you will need a dependency management tool (npm)
- Avoid any backend development / dependency. Create a mocked communication with a fake server.
- Use of graphic library D3.js
- Use of pure Javascript language ES6
- Insert the 3 different graphs in an animated carrousel-like (or gallery) component on window resize
- Pixel accuracy reproducing designs

## Data:

- No backend development / dependency but a mocked communication with a fake server.


## Author: 

Eric Delerue
delerue_eric@hotmail.com

## Demo

A demo of the test can be reach here:

* [Demo](http://dev.ericdelerue.com/marfeel/index.html) 

## Note: 

No additional libraries or frameworks or configuration files have been used, except prettier for code styling.

## Made on/with:

  - Windows 10
  - IE Edge / Google Chrome
  - node 10.11.0
  - npm 6.4.1
  - body-parser 1.18.3
  - express 4.16.4
  - D3.js 4.10.0

## Installation (local):

Put the files in a directory (i.e.: /marfeel/)

Open the command line and type: 

	npm install

Then 

	npm start 

Open a browser window and type http://localhost:3000/index.html 

Wait 2 seconds (setTimeout to simulate a database access) to see the result
