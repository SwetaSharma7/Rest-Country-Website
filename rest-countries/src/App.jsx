import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";

function App() {
  const [region, setRegion] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubregion, setSelectedSubregion] = useState(null); 
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
        const arr = Object.keys(
          data.reduce((acc, cv) => {
            if (!acc[cv.region]) {
              acc[cv.region] = 1;
            }
            return acc;
          }, {})
        );
        setRegion(arr);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRegionChange = (Region) => {
    setSelectedRegion(Region);
    setSelectedSubregion(null); 
  };

  const handleSubregionChange = (subregion) => { 
    setSelectedSubregion(subregion);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <>
      <Header />
      <Content
        countriesData={countriesData}
        region={region}
        handleSearch={handleSearch}
        handleRegionChange={handleRegionChange}
        handleSubregionChange={handleSubregionChange} 
        handleSortChange={handleSortChange}
        selectedRegion={selectedRegion} 
      />
      <Card
        countriesData={countriesData}
        searchTerm={searchTerm}
        selectedRegion={selectedRegion}
        selectedSubregion={selectedSubregion} 
        sortOption={sortOption}
      />
    </>
  );
}

export default App;
