// Import necessary modules and components
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home'; // Import the Home component
import Artist from './Artist'; // Import the Artist component
import Booking from './Booking'; // Import the Booking component

// Define the App component
const App = () => {
  return (
    // Main container with a background color
    <div className="relative z-0 bg-primary">
      {/* Background pattern for the hero section */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* Include the Navbar component */}
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

// Export the App component for use in other parts of the application
export default App;



