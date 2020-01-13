import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import CONFIG from "./constants";

if (!firebase.apps.length) {
  console.log(CONFIG.firebase)
  firebase.initializeApp(CONFIG.firebase);
}

const settings = {
  url: process.env.LOGIN_URL,
  handleCodeInApp: true
};

const sendEmail = email => {
  return firebase.auth().sendSignInLinkToEmail(email, settings);
};

export { sendEmail, firebase };
