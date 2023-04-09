const { getToken } = require('./get-token');

const resolvers = {
  Query: {
    getToken,
  },
};

module.exports = resolvers;
