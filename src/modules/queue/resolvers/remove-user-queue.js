const removeUserQueue = async (_, { id }, ctx) => {
  const { models } = ctx;
  const { UserQueue } = models;
  try {
    await UserQueue.destroy({
      where: {
        id,
      },
    });
    return { message: 'User removed from queue.' };
  } catch (err) {
    return err;
  }
};

module.exports = { removeUserQueue };
