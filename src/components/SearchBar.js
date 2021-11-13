import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSubmit, hasResult }) => {
  const [term, setTerm] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form className="search-input-container" onSubmit={onSubmitForm}>
      <img src={`${process.env.PUBLIC_URL}/icon-search.svg`} />
      <div className="search-input">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search GitHub username..."
        />
        {hasResult !== null && !hasResult && (
          <div className="search-input-no-results">No results</div>
        )}
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
