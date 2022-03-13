import React from "react";
import classNames from "classnames";

//this is temporary button

function Button(props) {
  return <button
    className={classNames('button', {
      'button--outline': props.outline,
    })}
  >{props.children}</button>
};

export default Button;