const { pubSub } = require('../../../pubsub/index');
const { WAITING_QUEUE } = require('../../../../constants/triggers-constant');
const { getToken } = require('../../token/resolvers/get-token');

const addUserQueue = async (_, arg, ctx) => {
  const { models } = ctx;
  const { UserQueue } = models;
  try {
    let newUser = await UserQueue.create({
      ...arg,
      token: '',
      channelName: '',
    });

    let users = await UserQueue.findAll({
      where: {
        waiting: true,
      },
    });

    let usersJoined = [];
    let response = null;
    // Run queue until their are users in queue
    while (users.length / 2 >= 1) {
      try {
        const i = 0;
        users[i].waiting = false;
        users[i + 1].waiting = false;
        // Update user status
        response = getToken(_, [users[i].dataValues, users[i + 1].dataValues], ctx);
        usersJoined = [...usersJoined, users[i].id, users[i + 1].id];
        // Update users queue list
        users = users.filter(u => u.waiting === true);
      } catch (err) {
        return err;
      }
    }

    await UserQueue.update(
      {
        waiting: false,
        token: response?.token,
        channelName: response?.channelName,
      }, {
        where: {
          id: usersJoined,
        },
      },
    );

    const subscribedUser = await UserQueue.findAll({
      where: {
        waiting: false,
      },
    });

    const filteredArr = [];
    subscribedUser.forEach(u => {
      filteredArr.push(u.dataValues);
    });

    pubSub.publish(WAITING_QUEUE, { getUserWaitingUserQueue: filteredArr });

    // Check if user is made Joinable
    newUser = await UserQueue.findOne({
      where: {
        id: newUser.id,
      },
    });

    console.log('New User: ', newUser.dataValues);
    return newUser.dataValues;
  } catch (err) {
    return err;
  }
};

module.exports = { addUserQueue };
