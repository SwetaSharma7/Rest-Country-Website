import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content({ region }) {
  return (
    <div className="content">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="search for a country" className="search-input"></input>
      </div>
      <div>
        <select id="dropdown">
          <option value={null} select="true">
            Filter By Region
          </option>
          {region.map((region, index) => (
            <option key={index} value={region} select="true">
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Content;
