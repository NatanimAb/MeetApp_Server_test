const logIpMiddleware = async (resolve, root, args, context, info) => {
  const { req: { headers = null, socket = null, ip = null } } = context;
  context.reqIp = (headers && headers['x-forwarded-for']) || socket?.remoteAddress || ip || 'NA';
  const result = await resolve(root, args, context, info);
  return result;
};

module.exports = logIpMiddleware;
