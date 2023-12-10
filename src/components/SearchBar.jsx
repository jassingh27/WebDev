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
    <form class="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        class="search-input"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button class="search-button" type="submit">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
