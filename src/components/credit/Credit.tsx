const style = (
  <style jsx global>{`
    a {
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
    <a {...href}>{desc}</a>
      {style}
    </>
  );
};


export default Credit;
 