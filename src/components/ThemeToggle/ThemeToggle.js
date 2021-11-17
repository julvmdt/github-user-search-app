import React from "react";
import "./ThemeToggle.scss";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="app-toggle-container">
      <h4 className="h4-bold">
        {(theme === "light" ? "light" : "dark").toUpperCase()}
      </h4>
      <img
        onClick={toggleTheme}
        src={`${process.env.PUBLIC_URL}/icon-${
          theme === "dark" ? "sun" : "moon"
        }.svg`}
      />
    </div>
  );
};

export default ThemeToggle;
