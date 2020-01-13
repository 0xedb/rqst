export default {
  user: "rqst_user",
  login: {
    email: Symbol("email"),
    direct: Symbol("direct"),
    external: Symbol("external"),
    init: Symbol("init")
  },
  firebase: {
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_DB_URL,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORE_BUCKET,
    messagingSenderId: process.env.GATSBY_MSG_SENDER,
    appId: process.env.GATSBY_APP_ID,
    measurementId: process.env.GATSBY_MEASUREMENT_ID
  }
};
