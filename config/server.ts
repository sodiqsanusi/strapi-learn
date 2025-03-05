export default ({ env }) => ({
  url: env('RAILWAY_URL'), 
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
