import "./credit.css";
import React from 'react';
 


const Credit = ({ href, desc }) => {
  return (
    <a className="credit" href={href} rel="noreferrer noopener">
      {desc}
    </a>
  );
};

export default Credit;
