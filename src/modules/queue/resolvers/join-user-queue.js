const joinUserQueue = async (_, { id }, ctx) => {
  const { models } = ctx;
  const { UserQueue } = models;

  try {
    await UserQueue.update({ waiting: false }, {
      where: {
        id,
      },
    });

    const user = await UserQueue.findOne({
      where: {
        id,
      },
    });
    // const waitingUsers = await UserQueue.findAll({
    //   where: {
    //     waiting: true,
    //   },
    // });

    // pubSub.publish(WAITING_QUEUE, { getUserWaitingUserQueue: waitingUsers });

    return user;
  } catch (err) {
    return err;
  }
};

module.exports = { joinUserQueue };
