import React from "react";
import { useLozad } from "../../hooks/lozad";
import Credit from "../credit/Credit";
import LoginForm from "../login/LoginForm";
import { sendEmail } from "../../util/firebase";
import { message } from "antd";
import CONFIG from "../../util/constants";
import "./index.css";

const callback = async email => {
  sendEmail(email)
    .then(() => {
      message.success({
        content: "email link sent",
        duration: 7
      });
    })
    .then(() => window.localStorage.setItem(CONFIG.user, btoa(email)))
    .catch(err => {
      message.error({
        content: err.message,
        duration: 7
      });
    });
};

const Index = () => {
  useLozad();
  return (
    <div id="index">
      <section className="index-content">
        <div className="background">
          <img
            data-src="/images/people.svg"
            id="people"
            className="lozad"
            alt="people"
          />
          <Credit
            href="https://www.freepik.com/free-photos-vectors/people"
            desc="People vector created by pikisuperstar - www.freepik.com"
          />
        </div>
        <div className="centered">
          <LoginForm {...{ callback }} />
        </div>
      </section>
    </div>
  );
};

export default Index;
