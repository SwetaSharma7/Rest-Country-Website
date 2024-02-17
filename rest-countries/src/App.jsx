import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";

function App() {
  const [region, setRegion] = useState([]);
  const [details, setDetails] = useState([]);


  return (
    <>
      <Header />
      <Content region={region} data={details}/>

      <Card setRegion={setRegion} setDetails={setDetails}/>
    </>
  );
}

export default App;
