import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, children, path, onClick }) => {
  return (
    <>
      <button className={` ${className}`} onClick={onClick}>
        <Link to={path}>{children}</Link>
      </button>
    </>
  );
};
export default Button;
