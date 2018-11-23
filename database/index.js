const revenue = [
  {
    name: 'tablet',
    value: 120000,
  },
  {
    name: 'smartphone',
    value: 80000,
  },
];

const impresions = [
  {
    name: 'tablet',
    value: 20000000,
  },
  {
    name: 'smartphone',
    value: 30000000,
  },
];

const visits = [
  {
    name: 'tablet',
    value: 480000000,
  },
  {
    name: 'smartphone',
    value: 120000000,
  },
];

class DatabaseConnection {
  constructor(server) {
    this.server = server;
  }

  /**
   * Loads all data.
   * @returns {Promise<{revenue, impresions, visits}>}
   */
  load() {
    logger.info('Database: loaded');
    return Promise.resolve({ revenue, impresions, visits });
  }
}

/**
 * A mock database client that simulates getting data from a database and a slow initial connection.
 */
class DatabaseClient {
  connect(server) {
    return new Promise((resolve, reject) => {
      if (server === null) {
        reject(new Error('No server specified'));
      }
      setTimeout(() => {
        logger.info('Database: connected = ', server);
        resolve(new DatabaseConnection(server));
      }, 2000);
    });
  }
}

const getData = async function(datatype) {
  try {
    // const datatype = arguments.length ? arguments[0] : null;
    //logger.info('getData datatype: ', datatype);

    const db = new DatabaseClient();

    // Connect to the database
    const connection = await db.connect(true);
    //logger.info('connection: ', connection);

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
    }
  } catch (e) {
    logger.error('e: ', e);
    return e;
  }
};
