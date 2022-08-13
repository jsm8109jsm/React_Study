import classNames from "classnames";
import React from "react";
import "./Button.scss";

// size: large, medium, small
function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
