import React from "react";

const SelectOptions = ({ favorites }) => {
  return (
<option value={favorites.ID}>{favorites.Title}</option>
  );
};

export default SelectOptions;