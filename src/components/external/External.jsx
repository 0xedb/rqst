import React from "react";
import Page from "../page/Page";
import { message } from "antd";
import LoginForm from "../login/LoginForm";

const callback = () => {
  
}

const External = () => {
  return (
    <Page>
      {message.warning({
        content: "enter your email to login",
        duration: 8
      })}
      <div className="centered high">
        <LoginForm />
      </div>
    </Page>
  );
};

export default External;
