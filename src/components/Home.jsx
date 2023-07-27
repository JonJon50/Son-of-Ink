import React from 'react';
import videoBg from 'public/static/videos/Tattoo Video.mp4';

const Home = () => {
  return (
    <div className="home relative h-screen">
      <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0" />
      <h1 className="text-white text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Welcome to Sons of Ink
      </h1>
    </div>
  );
};

export default Home;






