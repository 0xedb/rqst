import React from "react";
import "./credit_.css";

const Credit = ({ href, desc }) => {
  return (
    <a className="credit" href={href} rel="noreferrer noopener">
      {desc}
    </a>
  );
};

export default Credit;
