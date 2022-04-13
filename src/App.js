import React, { useState } from "react";
import './App.css';
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from "react-tooltip";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -15,
    name: "Paris",
    value: "500,000",
    coord: [2.3522, 48.8566]
  },
  {
    markerOffset: -15,
    name: "Delhi",
    value: "100,00000",
    coord: [77.1025, 28.7041]
  },
  {
    markerOffset: -15,
    name: "Moscow",
    value: "60,000",
    coord: [37.6173, 55.7558]
  },
  {
    markerOffset: -15,
    name: "Tokoyo",
    value: "500,0000",
    coord: [139.6503, 35.6762]
  },
  {
    markerOffset: -15,
    name: "Indonasia",
    value: "50,000",
    coord: [113.9213, -0.7893]
  },
  {
    markerOffset: -15,
    name: "Peru",
    value: "100,000",
    coord: [-75.0152, -9.1900]
  },
  {
    markerOffset: -15,
    name: "Kenya",
    value: "10,000",
    coord: [37.9062, -0.0236]
  },
  {
    markerOffset: -15,
    name: "Uruguay",
    value: "100,000",
    coord: [-55.811697, -32.5583168]
  },
  {
    markerOffset: -15,
    name: "Egypt",
    value: "600,000",
    coord: [30.8025, 26.8206]
  },
  {
    markerOffset: -15,
    name: "Nigeria",
    value: "1000",
    coord: [8.6753, 9.0820]
  },
]

function App() {
  const [content, setcontent] = useState("");
  return (
    <div className="App">
      <h1>Map</h1>
      <ReactTooltip>{content}</ReactTooltip>
      <div className="Map">
        <ComposableMap data-tip="">
          <ZoomableGroup zoom={1}>
            {" "}
            <Geographies geography={geoUrl}>
              {({ geographies }) => geographies.map((geo) => (
                <Geography key={geo.rsmkey} geography={geo} onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setcontent(`${NAME}`)
                }} onMouseLeave={() => {
                  setcontent("");
                }} fill="#EAEAEC" stroke="#D6D6DA"
                style={{
                  hover: {
                    fill: "#f53",
                    outline: "none"
                  }}} />
              ))}
            </Geographies>
            {
              markers.map(({ name, coord, markerOffset, value }) => (
                <Marker key={name} coordinates={coord}>
                  <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                  <text textAnchor="middle" y="-32" style={{ fontFamily: "system-ui", fill: "black" }}>
                    {name}
                  </text>
                  <text textAnchor="middle" y={markerOffset} style={{ fontFamily: "system-ui", fill: "black" }}>
                    {value}
                  </text>
                </Marker>
              ))
            }
            <Line
              from={[2.3522, 48.8566]}
              to={[-75.0152, -9.1900]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[2.3522, 48.8566]}
              to={[37.6173, 55.7558]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[2.3522, 48.8566]}
              to={[77.1025, 28.7041]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[-75.0152, -9.1900]}
              to={[-55.811697, -32.5583168]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[-55.811697, -32.5583168]}
              to={[113.9213, -0.7893]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[-75.0152, -9.1900]}
              to={[8.6753, 9.0820]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[8.6753, 9.0820]}
              to={[37.9062, -0.0236]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[8.6753, 9.0820]}
              to={[30.8025, 26.8206]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[30.8025, 26.8206]}
              to={[77.1025, 28.7041]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[37.9062, -0.0236]}
              to={[77.1025, 28.7041]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[37.6173, 55.7558]}
              to={[139.6503, 35.6762]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <Line
              from={[113.9213, -0.7893]}
              to={[139.6503, 35.6762]}
              stroke="#FF5533"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
