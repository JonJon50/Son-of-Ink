// pages/booking.js

import React from 'react';
import BookingStyles from '../pages/booking.module.css'; // Import the CSS module

const Booking = () => {
  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <div className={`${BookingStyles.container} container mt-5`}>
      <h1 className="text-center mt-5">Bookings</h1>
      <div className={`d-flex ${BookingStyles.center}`}>
        <form className={`card p-4 ${BookingStyles.form}`} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Brief description of tattoo"></textarea>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Location on body" />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Choose your artist">
              <option>Select Artist</option>
              <option value="Theron">Theron</option>
              <option value="Jonny">Jonny</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="How did you hear about us?">
              <option>How did you hear about us?</option>
              <option value="internetSearch">Internet Search</option>
              <option value="socialMedia">Social Media</option>
              <option value="wordOfMouth">Word of Mouth</option>
              <option value="sonOfInkEmployee">Son of Ink Employee</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="clientStatus" />
            <label className="form-check-label" htmlFor="clientStatus">New or Returning Client</label>
          </div>
          <div className={`text-center ${BookingStyles.submitButton}`}>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;

