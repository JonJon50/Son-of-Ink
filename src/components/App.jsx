import React from "react";
import Navbar from "./Navbar"; 
import Home from "./Home"; 
import Artist from "./Artist"; 
import Booking from "./Booking"; 

// Define the App component
const App = () => {
  return (
    // Main container with a background color
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      {/* Render the Home component */}
      <Home />

      {/* Render the Artist component */}
      <Artist />

      {/* Render the Booking component */}
      <div className="relative z-0">
        <Booking />
      </div>
    </div>
  );
};

export default App;
