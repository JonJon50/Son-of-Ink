import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Home, Artist, Booking, Navbar, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Home />
        <Artist />
        <Works />
        <div className="relative z-0">
          <Booking />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


