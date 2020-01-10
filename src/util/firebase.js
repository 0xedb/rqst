import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const init = () => {
  const CONFIG = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(CONFIG);
  }

  return {
    url: process.env.LOGIN_URL,
    handleCodeInApp: true
  };
};

const settings = init();

const sendEmail = email => {
  return firebase.auth().sendSignInLinkToEmail(email, settings);
};

export { sendEmail };
