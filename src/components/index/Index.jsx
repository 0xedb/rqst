import { useLozad } from "../../hooks/lozad";
import Credit from "../credit/Credit";
import LoginForm from "../login/LoginForm";
import "./index.css";
import React from "react";
 
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
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
