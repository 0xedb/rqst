export default {
  user: "rqst_user",
  login: {
    email: Symbol("email"),
    direct: Symbol("direct"),
    external: Symbol("external"),
    init: Symbol("init")
  },
  firebase: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  }
};
