// pages/booking.js
import React, { useState } from 'react';
import BookingStyles from '../pages/booking.module.css'; // Import the CSS module
import { sendContactForm } from "../lib/api";
import Map from "../components/map/Map"; // Import the Map component

const initValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  tatoo: "",
  bodyLocation: "",
  artist: "",
  hearAbout: "",
  tattooPic: "",
  newClient: false,
};

const initState = { isLoading: false, error: "", values: initValues };

const Booking = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleChangeCheckbox = () => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        newClient: !prev.values.newClient, 
      },
    }));
  };


  // Handle form submission logic here
  const handleSubmit = async (e) => {
    e.preventDefault()
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className={`${BookingStyles.container} container mt-5`}>
      <h1 className={`${BookingStyles.Times} text-center mt-5`}>Booking</h1>
      <p>* Denotes a required field.</p>
      <div className={`d-flex ${BookingStyles.center}`}>
        <form className={`card p-4 ${BookingStyles.form}`} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="First Name*"
              required />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Phone Number*"
              required />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Email*"
              required />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              type="text"
              name='tattoo'
              rows={4}
              value={values.tattoo}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Brief description of tattoo"></textarea>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name='bodyLocation'
              value={values.bodyLocation}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Location on body" />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name='artist'
              value={values.artist}
              onChange={handleChange}
              onBlur={onBlur}
              aria-label="Choose your artist">
              <option>Select Artist</option>
              <option value="Theron">Theron</option>
              <option value="Jonny">Jonny</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name='hearAbout'
              value={values.hearAbout}
              onChange={handleChange}
              onBlur={onBlur}
              aria-label="How did you hear about us?">
              <option>How did you hear about us?</option>
              <option value="internetSearch">Internet Search</option>
              <option value="socialMedia">Social Media</option>
              <option value="wordOfMouth">Word of Mouth</option>
              <option value="sonOfInkEmployee">Son of Ink Employee</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="file"
              name="tattooPic"
              value={values.tattooPic}
              onChange={handleChange}
              onBlur={onBlur}
              className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name='newClient'
              className="form-check-input"
              value={values.newClient}
              checked={values.newClient}
              onChange={handleChangeCheckbox}
              onBlur={onBlur}
              id="clientStatus" />
            <label className="form-check-label" htmlFor="clientStatus">New or Returning Client</label>
          </div>
          <div className={`text-center ${BookingStyles.submitButton}`}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!values.firstName || !values.email || !values.phoneNumber}
              onClick={handleSubmit}
            >Submit</button>
          </div>
        </form>        
      </div>
    </div>
  );
};

export default Booking;
