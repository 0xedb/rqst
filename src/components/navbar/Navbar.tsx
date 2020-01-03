const style = (
  <style jsx>{`
    nav {
      position: fixed;
      height: 50px;
      width: 100%;
      background: #fffffffa;
      box-shadow: 0px 6px 20px #0000000f;
      z-index: 20;
      display: flex;
      align-items: center;
    }

    .logo {
      padding-left: 20px;
    }
  `}</style>
);
const Navbar = ({ children }: Props) => {
  return (
    <>
      <nav>
        <div className="logo">hello</div>
        {children}
      </nav>
      {style}
    </>
  );
};

export default Navbar;
