import React, { useState } from "react";
import "../styles/SearchBar.css";
import searchIcon from "../assets/search.png";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
