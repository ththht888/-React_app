import React from "react";

const Select = ({ value, onChange }) => {
  return (
    <select className="blockSelect" value={value} onChange={onChange}>
      <option value="">Должность</option>
      <option value="admin">Admin</option>
      <option value="developer">Developer</option>
      <option value="qa">Qa</option>
      <option value="devops">DevOps</option>
    </select>
  );
};

export default Select;
