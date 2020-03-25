import React from "react";

const Dropdown = ({ options, onChange }) => {
  return (
    <div>
      Sort by:
      <select onChange={onChange}>
        {options.map(({ key, value }) => {
          return <option key={key}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
