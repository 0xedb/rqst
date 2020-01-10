import { useEffect, useState } from "react";
import { firebase } from "../util/firebase";
import CONFIG from "../util/constants";
const { auth } = firebase;

const LOGIN = CONFIG.login;

const useLogin = () => {
  const [kind, setKind] = useState(LOGIN.init);
  useEffect(() => {
    if (auth().isSignInWithEmailLink(window.location.href)) {
      if (window.localStorage.getItem(CONFIG.user)) {
        setKind(() => LOGIN.email);
      } else {
        setKind(() => LOGIN.external);
      }
    } else {
      setKind(() => LOGIN.direct);
    }
  }, []);
  return kind;
};

export { useLogin };
