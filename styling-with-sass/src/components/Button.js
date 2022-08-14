import classNames from "classnames";
import React from "react";
import "./Button.scss";

// size: large, medium, small
function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames("Button", size, color, {
        outline,
        fullWidth,
      })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
