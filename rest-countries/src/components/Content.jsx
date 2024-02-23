import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "./DarkMode";

function Content({ countriesData, region, handleSearch, handleRegionChange, handleSubregionChange, handleSortChange, selectedRegion }) {
  const { isDarkMode } = useDarkMode();

  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleChangeRegion = (event) => {
    const Region = event.target.value;
    handleRegionChange(Region);
  };

  const handleChangeSubregion = (event) => {
    const subregion = event.target.value;
    handleSubregionChange(subregion);
  };

  const handleChangeSort = (event) => {
    const option = event.target.value;
    handleSortChange(option);
  };

  const subregions = countriesData.reduce((acc, curr) => {
    if (selectedRegion && selectedRegion === curr.region) {
      if (!acc.includes(curr.subregion)) {
        acc.push(curr.subregion);
      }
    }
    return acc;
  }, []);

  return (
    <div className={isDarkMode ? "content content-DM" : "content"}>
      <div className={isDarkMode ? "search search-DM" : "search"}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" 
        placeholder="Search for a country" 
        className="search-input"
        onChange={(e) =>handleChange(e)} />
      </div>

      <div className={isDarkMode ? "dropDown dropdown-DM" : "dropDown"}>
        <select className={isDarkMode ? "region region-Dm" : "region"} id="dropdown" onChange={handleChangeRegion}>
          <option value={null} defaultValue>
            Filter By Region
          </option>
          {region.map((regionName, index) => (
            <option key={index} value={regionName}>
              {regionName}
            </option>
          ))}
        </select>

        {/* Add select for subregions */}
        <select className={isDarkMode ? "dropdown-DM" : "dropDown"} id="dropdown" onChange={handleChangeSubregion}>
          <option value={null} defaultValue>
            Filter By Subregion
          </option>
          {subregions.map((subregion, index) => (
            <option key={index} value={subregion}>
              {subregion}
            </option>
          ))}
        </select>

        <select className={isDarkMode ? "dropdown-DM" : "dropDown"} id="dropdown" onChange={handleChangeSort}>
          <option value={null} defaultValue>
            Sort
          </option>
          <option value="descPopulation">Descending order of Population</option>
          <option value="ascPopulation">Ascending order of Population</option>
          <option value="descArea">Descending order of Area</option>
          <option value="ascArea">Ascending order of Area</option>
        </select>
      </div>
    </div>
  );
}

export default Content;
