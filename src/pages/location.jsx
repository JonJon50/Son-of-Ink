import React from "react";
import Map from "../components/map/Map";
import './location.module.css'

const Location = () => {
  return (
    <div className="whole-container">
      <div className="direction-container">
        <p>
          <span>Location</span>
        </p>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default Location;
