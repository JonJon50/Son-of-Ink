// pages/booking.jxs

import React, { useState } from "react";
import BookingStyles from "../pages/booking.module.css"; // Import the CSS module
import { sendContactForm } from "../lib/api";
import Link from "next/link";
import styles from "./booking.module.css";
import { motion } from "framer-motion";

const initValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  tattoo: "",
  bodyLocation: "",
  artist: "",
  hearAbout: "",
  tattooPic: "",
  newClient: false,
};

const slideIn = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const initState = { isLoading: false, error: "", values: initValues };

const Booking = ({ showBackground = true }) => {
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

  const handleChangeCheckbox = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.checked,
      },
    }));

  // Handle form submission logic here
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      {showBackground && <div className={BookingStyles.parallaxBackground} />}
      <div className={BookingStyles.container}>
        <motion.h2 
          className={BookingStyles.title}
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Book Your Appointment
        </motion.h2>
        {/* Button container */}
        <div className={styles["button-container round-button"]}>
          <Link href="https://www.google.com/search?q=sons+of+ink&oq=son&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRgnGDsYgAQYigUyBggCEEUYOTIGCAMQRRg7MhIIBBAuGEMYrwEYxwEYgAQYigUyEAgFEC4YgwEYsQMYgAQY5QQyEAgGEC4YxwEYsQMY0QMYgAQyDAgHEAAYQxiABBiKBTIQCAgQLhiDARjUAhixAxiABDIQCAkQLhiDARjUAhixAxiABNIBCTU4MTlqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89c260d8d6782ea3:0x6c46c1b72a85ddd7,1,,,,">
            <motion.button
              className={`${styles["round-button"]} ${styles["text-overlay"]}`}
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.5, delay: 1 }}
            >
              READ THE REVIEWS
            </motion.button>
          </Link>
        </div>
        <div className={BookingStyles.layout}>
          <div className={BookingStyles.bookingCard}>
            {/* Booking card */} {/* Adjust the width as needed */}
            <form
              className={`card p-4 ${BookingStyles.form}`}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  type="text"
                  name="tattoo"
                  rows={4}
                  value={values.tattoo}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Brief description of tattoo"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="bodyLocation"
                  value={values.bodyLocation}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Location on body"
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="artist"
                  value={values.artist}
                  onChange={handleChange}
                  onBlur={onBlur}
                  aria-label="Choose your artist"
                >
                  <option>Select Artist</option>
                  <option value="Theron">Theron</option>
                  <option value="Art">Art</option>
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="hearAbout"
                  value={values.hearAbout}
                  onChange={handleChange}
                  onBlur={onBlur}
                  aria-label="How did you hear about us?"
                >
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
                  className="form-control"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  name="newClient"
                  className="form-check-input"
                  checked={values.newClient}
                  onChange={handleChangeCheckbox}
                  onBlur={onBlur}
                  id="clientStatus"
                />
                <label className="form-check-label" htmlFor="clientStatus">
                  New or Returning Client
                </label>
              </div>
              <div className={`text-center ${BookingStyles.submitButton}`}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={
                    !values.firstName || !values.email || !values.phoneNumber
                  }
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
