import React from "react";

const Input = ({ value, onChange, placeholder, isPhone = false }) => {
  const handleKeyDown = (e) => {
    if (
      ["e", "-", "+", ".", " ", ",", "ArrowUp", "ArrowDown"].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  return (
    <input
      className="inputString"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={isPhone ? handleKeyDown : undefined}
    />
  );
};

export default Input;
