import Navbar from './Navbar';
import Home from './Home';
import Artist from './Artist';
import Works from './Works';
import Booking from './Booking';

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Home />
      <Artist /> {/* This renders the Artist component */}
      <Works />
      <div className="relative z-0">
        <Booking />
      </div>
    </div>
  );
};

export default App;



