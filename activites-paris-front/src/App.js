import "./App.css";
import Map from "./Components/Map";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [pmr, setPmr] = useState(false);
  const [blind, setBlind] = useState(false);
  const [deaf, setDeaf] = useState(false);

  const onChange = (date) => {
    setDate(date);
    console.log("state app " + date.toISOString().split("T")[0]);
  };

  const pmrChange = () => {
    setPmr(!pmr);
  };

  const blindChange = () => {
    setBlind(!blind);
  };
  const deafChange = () => {
    setDeaf(!deaf);
  };

  return (
    <div className="App">
      <h1>Activités à Paris</h1>
      <div className="options">
        <DatePicker
          selected={date}
          onChange={onChange}
          dateFormat="dd-MM-yyyy"
        />

        <div>
          <label> accès pour les personnes handicapées</label>{" "}
          <input type="checkbox" checked={pmr} onChange={pmrChange} />
        </div>
        <div>
          <label> accès pour les personnes aveugles</label>{" "}
          <input type="checkbox" checked={blind} onChange={blindChange} />
        </div>
        <div>
          <label> accès pour les personnes malentendantes</label>{" "}
          <input type="checkbox" checked={deaf} onChange={deafChange} />
        </div>
        <div className="map">
          <Map date={date} pmr={pmr} blind={blind} deaf={deaf} />
        </div>
      </div>
    </div>
  );
}

export default App;
