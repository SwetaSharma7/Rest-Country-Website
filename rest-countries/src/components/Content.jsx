import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content() {
  return (
    <div className="content">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="search for a country" className="search-input"></input>
      </div>
      <div>
        <select id="dropdown" >
          <option value="" selected >Filter by Region</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}

export default Content;
