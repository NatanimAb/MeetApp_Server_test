const { withFilter } = require('graphql-subscriptions');
const { getUserQueue } = require('./get-user-queue');
const { addUserQueue } = require('./add-user-queue');
const { removeUserQueue } = require('./remove-user-queue');
const { joinUserQueue } = require('./join-user-queue');
const { setUserQueue } = require('./set-user-queue');
const { pubSub } = require('../../../pubsub/index');
const { WAITING_QUEUE } = require('../../../../constants/triggers-constant');

const resolvers = {
  Query: {
    getUserQueue,
  },
  Mutation: {
    addUserQueue,
    removeUserQueue,
    joinUserQueue,
    setUserQueue,
  },

  Subscription: {
    getUserWaitingUserQueue: {
      subscribe: withFilter(() => pubSub.asyncIterator([WAITING_QUEUE]), (payload, variables) => {
        const pLoad = payload.getUserWaitingUserQueue.find(payL => payL.id === variables.id);
        return (pLoad.id === variables.id);
      }),
    },

  },

};

module.exports = resolvers;
