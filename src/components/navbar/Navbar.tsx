import Link from "next/link";

const style = (
  <style jsx>{`
    nav {
      position: fixed;
      height: 50px;
      width: 100%;
      background: #fffffffb;
      box-shadow: 0px 6px 20px #0000000f;
      z-index: 20;
      display: flex;
      align-items: center;
    }

    .logo {
      padding-left: 20px;
      font-family: "Fira Code", monospace;
    }

    .logo a {
      text-decoration: none;
    }
  `}</style>
);

const LOGO = `rqst<-`;

const Navbar = ({ children }: Props) => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link href="#">
            <a>{LOGO}</a>
          </Link>
        </div>
        {children}
      </nav>
      {style}
    </>
  );
};

export default Navbar;
