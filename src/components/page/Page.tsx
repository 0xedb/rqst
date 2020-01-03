const style = (
  <style jsx>{`
    #rqst {
      height: 100vh; 
      width: 100%;
      min-width: 300px;
      min-height: 470px;
      position: absolute;
    }
  `}</style>
);

const Page = ({ children }: Props) => {
  return (
    <>
      <div id="rqst">{children}</div>
      {style}
    </>
  );
};

export default Page;
