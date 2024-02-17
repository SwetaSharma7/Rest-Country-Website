import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content({ region, details }) {
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
          {region.map((regin, index) => (
            <option key={index} value={regin} select="true">
              {regin}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Content;
