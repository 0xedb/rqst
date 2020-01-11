import React from "react";
import { useLogin } from "../hooks/redirect";
import LoginForm from "../components/login/LoginForm";
import Page from "../components/page/Page";
import External from "../components/external/External";
import Form from '../components/form/Form'

const mapKindToComponent = kind => {
  switch (kind.description) {
    case "email":
      return <Form />;
    case "external":
      return <External />;
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
