require('dotenv').config();

const config = {
  host: process.env.HOST,
  port: process.env.PORT,
  postgres: process.env.DATABASE_URL,
  appUrl: process.env.APP_URL,
  hostUrl: process.env.HOST_URL,
  env: process.env.NODE_ENV,
  queryLengthLimit: Number(process.env.QUERY_LENGTH_LIMIT) || 3500,
  queryDepthLimit: Number(process.env.QUERY_DEPTH_LIMIT) || 5,
  queryComplexity: Number(process.env.QUERY_COMPLEXITY) || 100,
  queryPagingMaxCount: Number(process.env.QUERY_PAGING_MAX_COUNT) || 50,
  queryPagingMinCount: Number(process.env.QUERY_PAGING_MIN_COUNT) || 10,
  workspaceTokenLength: Number(process.env.WORKSPACE_TOKEN_LENGTH) || 24,
  logLevel: process.env.LOG_LEVEL || 'info',
  db: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
  },
  // sentry: process.env.SENTRY_DSN,
  // oneSignal: {
  //   appId: process.env.ONE_SIGNAL_APP_ID,
  //   apiKey: process.env.ONE_SIGNAL_API_KEY,
  //   url: process.env.ONE_SIGNAL_URL,
  // },
  // emailServer: {
  //   host: process.env.EMAIL_SERVER_HOST,
  //   appId: process.env.EMAIL_SERVER_APP_ID,
  //   secretKey: process.env.EMAIL_SERVER_SECRET_KEY,
  //   fromEmail: process.env.EMAIL_SERVER_FROM_EMAIL,
  //   fromName: process.env.EMAIL_SERVER_FROM_NAME,
  // },
  jwt: {
    secret: process.env.JWT_SECRET,
    lifeTime: process.env.JWT_LIFE_TIME,
    refreshTokenLifeTime: process.env.JWT_REFRESH_TOKEN_LIFE_TIME,
  },
  baseUrl: {
    baseUrl: process.env.BASE_URL,
  },
  agora: {
    appId: process.env.AGORA_APP_ID,
    appCertificate: process.env.AGORA_APP_CERTIFICATE,
  },
  clientUrl: process.env.CLIENT_URL,
  baseDomain: process.env.BASE_DOMAIN,
  baseDomainIP: process.env.BASE_DOMAIN_IP,
  // s3:{
  //   bucket: process.env.AWS_S3_BUCKET,
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  //   region: process.env.AWS_S3_REGION,
  //   endpoint: process.env.AWS_S3_ENDPOINT
  // }
};

module.exports = config;
