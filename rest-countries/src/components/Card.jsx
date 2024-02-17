import React, { useState, useEffect } from "react";

function Card({ setRegion, setDetails }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
        const arr = Object.keys(
          // extracting region name from data to use it into drop down

          data.reduce((acc, cv) => {
            if (!acc[cv.region]) {
              acc[cv.region] = 1;
            }
            return acc;
          }, {})
        );
        setRegion(arr);
        console.log(data);
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
