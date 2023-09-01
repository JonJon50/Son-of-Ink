// component/booking/Booking.jxs
import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../styles/styles.css';


const BookingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to send the selectedFile to your backend or service
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // You can use APIs or services to handle the file upload here
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
