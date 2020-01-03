import Link from "next/link";
import "./navbar.css";

const LOGO = `rqst<-`;

const Navbar = ({ children }: Props) => {
  return (
    <nav>
      <div className="logo">
        <Link href="#">
          <a>{LOGO}</a>
        </Link>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
