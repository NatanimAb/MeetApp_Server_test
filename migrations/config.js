const CONFIG = require('../config/config');

const env = CONFIG.env || 'development';
const dialect = 'postgres';

module.exports = {
  [env]: {
    dialect,
    ...CONFIG.db,
    migrationStorageTableName: '_migrations',
  },
};

