import React from "react";

function Card({ countriesData, searchTerm, selectedRegion, selectedSubregion, sortOption }) {
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
        return countriesData; 
      }
    });

  return (
    <div className="App">
      {filteredCountries.map((country, index) => (
        <div className="card" key={index}>
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
      ))}
    </div>
  );
}

export default Card;
