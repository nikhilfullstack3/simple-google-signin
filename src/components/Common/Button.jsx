import React from "react";
import "../../styles/Button.css"; // Import relevant styles

const Button = ({ className, onClick, children }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
