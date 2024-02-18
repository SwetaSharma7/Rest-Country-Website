import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content({ region, onSearch, onRegionChange }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    onRegionChange(selectedRegion);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="content">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search for a country"
          className="search-input"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div>
        <select id="dropdown" onChange={handleRegionChange}>
          <option value={null} defaultValue>
            Filter By Region
          </option>
          {region.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Content;
