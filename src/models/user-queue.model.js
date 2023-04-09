/* eslint-disable no-param-reassign */
const userQueue = (sequelize, DataTypes) => {
  const UserQueue = sequelize.define('UserQueue', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    waiting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    channelName: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    minutes: {
      type: DataTypes.INTEGER,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
    tableName: 'UserQueues',
    timestamps: true,
    underscored: true,
    paranoid: true,
  });

  UserQueue.associate = models => {
    console.log(models); // remove this line after uncommenting below lines
    // User.hasMany(models.workspace, {
    //   as: 'workspace_creator',
    //   foreignKey: 'userId',
    //   sourceKey: 'id',
    //   onDelete: 'RESTRICT',
    // });
  };

  return UserQueue;
};

module.exports = userQueue;
