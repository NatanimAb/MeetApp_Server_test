const setUserQueue = async (_, { id, waiting }, ctx) => {
  const { models } = ctx;
  const { UserQueue } = models;

  try {
    await UserQueue.update({ waiting }, {
      where: {
        id,
      },
    });

    const user = await UserQueue.findOne({
      where: {
        id,
      },
    });
    return user;
  } catch (err) {
    return err;
  }
};

module.exports = { setUserQueue };
