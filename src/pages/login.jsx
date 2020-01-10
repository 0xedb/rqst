import React from "react";
import { useLogin } from "../hooks/redirect";

function Login() {
  const kind = useLogin();
  console.log(kind);
  return (
    <div>
      <div>welcome to login</div>
    </div>
  );
}

export default Login;
