import React from "react";
import { useDarkMode } from "./DarkMode";
import { Link } from "react-router-dom";

function Card({ countriesData, searchTerm, selectedRegion, selectedSubregion, sortOption }) {
  const { isDarkMode } = useDarkMode();
  const filteredCountries = countriesData
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((country) =>
      selectedRegion ? country.region === selectedRegion : true
    )
    .filter((country) =>
      selectedSubregion ? country.subregion === selectedSubregion : true 
    )
    .sort((a, b) => {
      if (sortOption === "descPopulation") {
        return b.population - a.population;
      } else if (sortOption === "ascPopulation") {
        return a.population - b.population;
      } else if (sortOption === "descArea") {
        return b.area - a.area;
      } else if (sortOption === "ascArea") {
        return a.area - b.area;
      } else {
        return 0; 
      }
    });

  return (
    <div className={isDarkMode ? "App app-DM": "App"}>
      {filteredCountries.map((country, index) => (
        <Link to={`/details/${country.cca3}`} key={index} className="link">
        <div className={isDarkMode ? "card card-DM" : "card"}>
          <div className="img">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="info">
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </Link>
      ))}
    </div>
  );
}

export default Card;
