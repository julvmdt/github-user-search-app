import React from "react";
import "./ThemeToggle.scss";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="app-toggle-container">
      <h4 className="h4-bold" data-testid="label">
        {(theme === "light" ? "light" : "dark").toUpperCase()}
      </h4>
      <img
        onClick={toggleTheme}
        src={`${process.env.PUBLIC_URL}/icon-${
          theme === "dark" ? "sun" : "moon"
        }.svg`}
        data-testid="toggle"
      />
    </div>
  );
};

export default ThemeToggle;
