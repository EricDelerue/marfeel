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

### Data:

- No backend development / dependency but a mocked communication with a fake server.

There is currently TWO WAYS to get the data from the backend:

- from json files
- from a fake connection to a database through express mini server

See Backend installation below

### Tests with Jasmine

Reach http://127.0.0.1/marfeel/js/jasmine/SpecRunner.html

	/marfeel/js/jasmine/src/boot.js
	/marfeel/js/jasmine/src/ring.js

	/marfeel/js/jasmine/spec/bootSpec.js
	/marfeel/js/jasmine/spec/ringSpec.js

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

## Front-End Installation (local):

Put all the files in a directory (i.e.: /marfeel/) on your local server

Open a browser window and type http://127.0.0.1/marfeel/index.html 

## Backend Installation (local):

There is currently TWO WAYS to get the data from the backend:

### 1. From json files

Three json files have been created in the /database/ directory. They are called as endpoints by the Ring class in js/boot.js 

	http://127.0.0.1/marfeel/database/revenue.json

	http://127.0.0.1/marfeel/database/impresions.json

	http://127.0.0.1/marfeel/database/visits.json

### 2. From a fake connection to a database through express mini server

All the backend files are in the /backend/ directory. A timeout of 2 seconds has been set to simulate a database access.

In the command line, go into your /marfeel/ directory and type: 

	npm install

Then start express server for the backend:

	npm start 

Open a browser window and type one of these endpoints:

	http://127.0.0.1:3000/backend/revenue 

	http://127.0.0.1:3000/backend/impresions 

	http://127.0.0.1:3000/backend/visits 

Wait 2 seconds (setTimeout to simulate a database access) to see the result

Use this endpoints with the Ring class in js/boot.js as above in the first solution.
