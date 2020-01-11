import React, { useEffect } from "react";
import Page from "../page/Page";
import { message } from "antd";
import LoginForm from "../login/LoginForm";
import { firebase } from "../../util/firebase";
import CONFIG from "../../util/constants";

const { auth } = firebase;

const callback = email => {
  auth()
    .signInWithEmailLink(email, window.location.href)
    .then(() => {
      window.localStorage.removeItem(CONFIG.user);
      console.log("successful");
    })
    .catch(err => message.error({ content: err.message, duration: 8 }));
};

const External = () => {
  useEffect(() => {
    message.warning({
      content: "enter your email to login",
      duration: 8
    });
  }, []);
  return (
    <Page>
      <div className="centered high">
        <LoginForm {...{ callback }} />
      </div>
    </Page>
  );
};

export default External;
