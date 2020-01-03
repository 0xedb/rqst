const style = (
  <style jsx>{`
    .credit {
      visibility: hidden;
      display: none;
      width: 0;
      height: 0;
      opacity: 0;
    }
  `}</style>
);
const Credit = ({ href, desc }: Credit) => {
  return (
    <>
      <a className="credit" href={href} rel="noreferrer noopener">
        {desc}
      </a>
      {style}
    </>
  );
};

export default Credit;
