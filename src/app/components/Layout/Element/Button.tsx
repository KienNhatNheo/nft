import React from 'react';

interface buttonProps {
  title: string;
  type: string;
  icon: string;
  onClick?: () => void;
}
function Button(props: buttonProps) {
  return (
    <>
      <button className={props.type} onClick={props.onClick}>
        <img src={props.icon} alt="" />
        <div>{props.title}</div>
      </button>
    </>
  );
}

export default Button;
