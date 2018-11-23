/*
- Connect to the database
- Get the data
- Filter it
- Send it back 
*/
const db = require('./database/index');
const logger = require('./logger');

const getData = async function(datatype) {
  try {

    logger.info('getData datatype: ', datatype);

    // Connect to the database
    const connection = await db.connect(true);
    logger.info('connection: ', connection);

    // Get the data
    const { revenue, impresions, visits } = await connection.load();

    // Send it back
    switch (datatype) {
      case 'revenue':
        return revenue;
        break;
      case 'impresions':
        return impresions;
        break;
      case 'visits':
        return visits;
        break;
      default:
        return {};
        break;
    }
  } catch (e) {
    logger.error('e: ', e);
    return e;
  }
};

module.exports = getData;