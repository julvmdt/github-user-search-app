import React, { useEffect, useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSubmit, hasResult }) => {
  const mediaQuery = window.matchMedia("(max-device-width: 480px)");

  const [term, setTerm] = useState("");
  const [placeholder, setPlaceholder] = useState(
    mediaQuery.matches ? "Search..." : "Search GitHub username..."
  );

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  useEffect(() => {
    const listener = (e) => {
      setPlaceholder(e.matches ? "Search..." : "Search GitHub username...");
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <form className="search-input-container" onSubmit={onSubmitForm}>
      <img src={`${process.env.PUBLIC_URL}/icon-search.svg`} />
      <div className="search-input">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={placeholder}
        />
        {hasResult !== null && !hasResult && (
          <span className="search-input-no-results">No results</span>
        )}
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
