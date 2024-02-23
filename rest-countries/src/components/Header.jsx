import React from "react";
import { useDarkMode } from "./DarkMode";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={isDarkMode ? "header dark-mode":"header"}>
      <div>
        <p>Where in the World..?</p>
      </div>
      <div className="toogle" onClick={toggleDarkMode}>
        <ion-icon name={isDarkMode ? "moon" : "moon-outline"}></ion-icon>
        <div>
          <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

