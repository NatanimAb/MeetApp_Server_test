const getUserQueue = async (_, arg, ctx) => {
  const { models } = ctx;
  const { UserQueue } = models;
  try {
    const Users = await UserQueue.findAll();
    return Users;
  } catch (err) {
    return err;
  }
};

module.exports = { getUserQueue };
