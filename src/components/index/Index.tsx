import { useLozad } from "../../hooks/lozad";
import Credit from "../credit/Credit";
import LoginForm from "../login/LoginForm";
import "./index.css";

const Index = () => {
  useLozad();
  return (
    <div id="index">
      <div className="background">
        <img data-src="/images/people.svg" className="lozad" alt="people" />
        <Credit
          href="https://www.freepik.com/free-photos-vectors/people"
          desc="People vector created by pikisuperstar - www.freepik.com"
        />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
