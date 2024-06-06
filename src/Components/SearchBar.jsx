import React from "react";
import { TextField } from "@mui/material";

//THE SEARCH BAR WILL CHECK WEATHER THE CITY SHOULD HAVE ENTERED IS === AVAILABLE CITY.
const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };
  //THIS FIELD WILL SEARCH THE CITY WHICH YOU HAVE ENTERED AND ALSO IT SHOULD BE PRESENT IN YOUR API.
  return (
    <TextField
      label="Search city"
      variant="outlined"
      fullWidth
      onKeyPress={handleSearch}
      style={{ margin: "20px 0" }}
    />
  );
};

export default SearchBar;
