import React from "react";
import { useLogin } from "../hooks/redirect";
import LoginForm from "../components/login/LoginForm";
import Page from "../components/page/Page";
import { message } from "antd";

const mapKindToComponent = kind => {
  switch (kind.description) {
    case "email":
      return <div>here</div>;
    case "external":
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
    case "init":
      return <></>;
    default:
      return <>{window.location.replace("/")}</>;
  }
};

function Login() {
  const kind = useLogin();
  console.log(kind);
  return <>{mapKindToComponent(kind)}</>;
}

export default Login;
