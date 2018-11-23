const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./logger');

const db = require('./database');
const getData = require('./model');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(express.static('public'));

app.get('/', (req, res) => {
  const testResult = getData();
  logger.info('testResult: ', testResult);
  res.json(testResult);
});
*/

app.use(express.static(__dirname + '/'));

app.get('/backend/:datatype', async (req, res, next) => {
  try {
    const datatype = req.params.datatype;
    const testResult = await getData(datatype);
    logger.info('testResult: ', testResult);
    res.json(testResult);
  } catch (e) {
    //this will eventually be handled by the error handling middleware
    next(e);
  }
});

app.listen(3000, () => logger.info('Server started'));
