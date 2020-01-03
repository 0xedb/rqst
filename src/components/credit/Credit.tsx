import "./credit.css";

const Credit = ({ href, desc }: Credit) => {
  return (
    <a className="credit" href={href} rel="noreferrer noopener">
      {desc}
    </a>
  );
};

export default Credit;
