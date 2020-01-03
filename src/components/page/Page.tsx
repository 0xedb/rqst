const style = (
  <style jsx>{`
    #rqst {
      height: 100vh;
      background: wheat;
      min-width: 300px;
      min-height: 470px;
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
