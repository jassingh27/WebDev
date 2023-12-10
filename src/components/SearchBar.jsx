import React, { useState } from "react";
import "../styles/SearchBar.css";
import searchIcon from "../assets/search.png";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Redirect to the search results page with the current search value
    window.location.href = `/searchresults?q=${encodeURIComponent(
      searchQuery,
    )}`;
  };

  return (
    <form class="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        class="search-input"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button class="search-button" type="submit">
        <img src={searchIcon} alt="Search Icon" onClick={handleSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
