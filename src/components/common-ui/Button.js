import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, children, path }) => {
  return (
    <>
      <button className={`btn ${className}`}>
        <Link to={path}>{children}</Link>
      </button>
    </>
  );
};
export default Button;
