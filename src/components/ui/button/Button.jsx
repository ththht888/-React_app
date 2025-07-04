import React from "react";

const Button = ({ text, onClick, disabled, className = "blockBtn" }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;