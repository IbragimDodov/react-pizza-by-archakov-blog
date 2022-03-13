import React from "react";
import classNames from "classnames";

//this is temporary button

function Button({ onClick, className, outline, children }) {
  return <button
    onClick={onClick}
    className={classNames('button', className, {
      'button--outline': outline,
    })}
  >{children}</button>
};

export default Button;