const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
// const { CustomApolloError } = require('../../../utils/error-handler');
// const { getMessage } = require('../../../utils/messages');
const { agora } = require('../../../../config/config');
const tokenLogger = require('../token-logger');

const getToken = (_, args, ctx) => {
  try {
    const { appId, appCertificate } = agora;
    // TODO: Need to update channel name and uid later to user wise name or something
    const channelName = `channel_${args[0].id.slice(0, 8) + args[0].name}_${args[1].id.slice(0, 8) + args[1].name}`;
    const uid = 0;

    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    // Build token with uid
    // eslint-disable-next-line max-len
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);

    return { token: tokenA, channelName };
  } catch (error) {
    tokenLogger(`ERROR WHILE FETCHING token>>> ${error}`, ctx, 'error');
    throw error;
  }
};

module.exports = { getToken };
