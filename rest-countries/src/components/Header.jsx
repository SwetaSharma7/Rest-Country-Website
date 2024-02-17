import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <p>Where in the World..?</p>
      </div>
      <div className="toogle">
        <>
          <ion-icon name="moon-outline"></ion-icon>
        </>
        <div>
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
