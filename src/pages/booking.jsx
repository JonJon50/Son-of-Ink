// pages/booking.jxs

import React, { useState } from "react";
import BookingStyles from "../pages/booking.module.css"; 
import Link from "next/link";
import styles from "./booking.module.css";
import { motion } from "framer-motion";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const initValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  tattoo: "",
  bodyLocation: "",
  artist: "",
  hearAbout: "",
  tattooPic: [],
  newClient: false,
};

const slideIn = {
  hidden: { x: 15, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const initState = { isLoading: false, error: "", values: initValues };

const Booking = ({ showBackground = true, homepageVariant = false }) => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    setSuccessMessage("");
    setState((prev) => ({
      ...prev,
      error: "",
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleChangeCheckbox = ({ target }) => {
    setSuccessMessage("");
    setState((prev) => ({
      ...prev,
      error: "",
      values: {
        ...prev.values,
        [target.name]: target.checked,
      },
    }));
  };

  const hasValidImageExtension = (fileName) =>
    ALLOWED_IMAGE_EXTENSIONS.some((extension) => fileName.toLowerCase().endsWith(extension));

  const handleFileChange = ({ target }) => {
    setSuccessMessage("");
    const selectedFiles = Array.from(target.files || []);

    if (selectedFiles.length > MAX_FILES) {
      target.value = "";
      setState((prev) => ({
        ...prev,
        error: `Please upload no more than ${MAX_FILES} image files.`,
        values: { ...prev.values, tattooPic: [] },
      }));
      return;
    }

    const invalidFile = selectedFiles.find(
      (file) =>
        file.size > MAX_FILE_SIZE ||
        !ALLOWED_IMAGE_TYPES.includes(file.type) ||
        !hasValidImageExtension(file.name)
    );

    if (invalidFile) {
      target.value = "";
      setState((prev) => ({
        ...prev,
        error: "Please upload JPEG, PNG, WebP, or GIF images that are 10 MB or smaller.",
        values: { ...prev.values, tattooPic: [] },
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      error: "",
      values: {
        ...prev.values,
        tattooPic: selectedFiles,
      },
    }));
  };

  const submitContactForm = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "tattooPic") {
        value.forEach((file) => formData.append(key, file));
      } else if (value !== null) {
        formData.append(key, value);
      }
    });

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("We could not submit your booking request. Please try again.");
    }

    return response.json();
  };

  // Handle form submission logic here
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setSuccessMessage("");
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: "",
    }));
    try {
      await submitContactForm(values);
      setTouched({});
      setState(initState);
      setSuccessMessage("Your booking request was sent successfully.");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "We could not submit your booking request. Please try again.",
      }));
    }
  };

  return (
    <>
      {showBackground && <div className={BookingStyles.parallaxBackground} />}
      <div
        className={`${BookingStyles.container} ${
          homepageVariant ? BookingStyles.homepageContainer : ""
        } ${!homepageVariant ? BookingStyles.standaloneContainer : ""}`}
      >
        <motion.h2 
          className={`${BookingStyles.title} ${
            homepageVariant ? BookingStyles.homepageTitle : ""
          } ${!homepageVariant ? BookingStyles.standaloneTitle : ""}`}
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Book Your Appointment
        </motion.h2>
        {/* Button container */}
        <div
          className={`${styles["button-container round-button"] || ""} ${
            homepageVariant ? styles.homepageReviews : ""
          } ${!homepageVariant ? styles.standaloneReviews : ""}`}
        >
          <Link href="https://www.google.com/search?q=son+of+ink+&sca_esv=e84c6bd2b5cb9bcc&sca_upv=1&sxsrf=ADLYWIIRFVGTlY84rvNr03vZ7Esfw597Sg%3A1721418265735&ei=GcKaZuG_LJKu5NoPlsqpuAM&ved=0ahUKEwihsPTh7rOHAxUSF1kFHRZlCjcQ4dUDCA8&oq=son+of+ink+&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3NvbiBvZiBpbmsgMgoQIxiABBgnGIoFMgUQABiABDIFEAAYgAQyERAuGIAEGJECGMcBGIoFGK8BMgsQLhiABBjHARivATIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IwmVQ4AtYoFtwAXgBkAEBmAGjAaAB0guqAQQwLjEyuAEMyAEA-AEBmAIMoAKCC8ICChAAGLADGNYEGEfCAhAQABiABBiwAxhDGMkDGIoFwgIOEAAYgAQYsAMYkgMYigXCAgcQIxiwAhgnwgIGEAAYBxgewgILEAAYgAQYhgMYigXCAgoQABgIGA0YHhgPwgIIEAAYgAQYogTCAgYQABgNGB7CAgQQABgemAMAiAYBkAYGkgcEMS4xMaAH-40B&sclient=gws-wiz-serp#lrd=0x89b7a1700cf1d6cf:0x71fb69d645eccf44,1,,,,">
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
        <div
          className={`${BookingStyles.layout} ${
            homepageVariant ? BookingStyles.homepageLayout : ""
          } ${!homepageVariant ? BookingStyles.standaloneLayout : ""}`}
        >
          <div
            className={`${BookingStyles.bookingCard} ${
              homepageVariant ? BookingStyles.homepageBookingCard : ""
            } ${!homepageVariant ? BookingStyles.standaloneBookingCard : ""}`}
          >
            {/* Booking card */} {/* Adjust the width as needed */}
            <form
              className={`card p-4 ${BookingStyles.form} ${
                homepageVariant ? BookingStyles.homepageForm : ""
              } ${!homepageVariant ? BookingStyles.standaloneForm : ""}`}
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
                  aria-label="First Name"
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
                  aria-label="Last Name"
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
                  aria-label="Phone Number"
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
                  aria-label="Email"
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
                  aria-label="Brief description of tattoo"
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
                  aria-label="Location on body"
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
                <label htmlFor="tattooPic" className="form-label">
                  Upload a Tattoo Reference Picture (Optional)
                </label>
                <input
                  type="file"
                  id="tattooPic"
                  name="tattooPic"
                  accept=".jpg,.jpeg,.png,.webp,.gif,image/jpeg,image/png,image/webp,image/gif"
                  multiple
                  onChange={handleFileChange}
                  className="form-control"
                />
                <div>File Limit: 5 images, 10MB each</div>
              </div>

              {successMessage && (
                <div className="alert alert-success" role="status">
                  {successMessage}
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}


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
                    isLoading || !values.firstName || !values.email || !values.phoneNumber
                  }
                >
                  {isLoading ? "Submitting..." : "Submit"}
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
