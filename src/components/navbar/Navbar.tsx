const style = (
  <style jsx>{`
    nav {
      position: fixed;
      height: 50px;
      width: 100%;
      background: #e0dede;
      z-index: 20;
      display: flex;
      align-items: center;
    }
  `}</style>
);
const Navbar = ({ children }: Props) => {
  return (
    <>
      <nav>hello{children}</nav>
      {style}
    </>
  );
};

export default Navbar;
