const logClientNameMiddleware = async (resolve, root, args, context, info) => {
  context.clientName = context?.req?.headers ? context?.req?.headers['apollographql-client-name'] || 'UNKNOWN' : 'UNKNOWN';
  const result = await resolve(root, args, context, info);
  return result;
};

module.exports = logClientNameMiddleware;
