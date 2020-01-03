const style = (
  <style jsx global>{`
    .credit {
      visibility: hidden;
      display: none;
      width: 0;
      height: 0;
      opacity: 0;
    }
  `}</style>
);
const Credit = () => {
  return (
    <>
      <div></div>
      {style}
    </>
  );
};

export default Credit;
