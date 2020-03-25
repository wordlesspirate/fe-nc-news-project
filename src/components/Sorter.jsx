import React from "react";

const Sorter = () => {
  return (
    <div>
      <select>
        <option value="0">Sort by:</option>
        <option value="1">created_at, asc</option>
        <option value="2">created_at, desc</option>
        <option value="3">comment count, asc</option>
        <option value="4">comment count, desc</option>
        <option value="5">votes, asc</option>
        <option value="6">votes, desc</option>
      </select>
    </div>
  );
};

export default Sorter;
