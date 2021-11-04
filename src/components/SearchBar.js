import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form className="search-input" onSubmit={onSubmitForm}>
      <img src={`${process.env.PUBLIC_URL}/icon-search.svg`} />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search GitHub username..."
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
