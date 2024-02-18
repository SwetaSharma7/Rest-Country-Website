import React from "react";

function Card({ countriesData }) {
  return (
    <div className="App">
      {countriesData.map((country, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img src={country.flags.png} alt={country.name.common} />
          </div>
          <div className="info">
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
