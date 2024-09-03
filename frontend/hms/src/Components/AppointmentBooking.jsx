import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import axios from "axios";
import { Appointmentdetail } from "../constant/index.js";

const AppointmentBooking = ({ doctor }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [message, setMessage] = useState("");
  const [disease, setDisease] = useState("");
  const [zero, setZero] = useState(0);
  const name = doctor.name;
  const addObject = (obj) => {
    Appointmentdetail.push(obj);
    console.log(Appointmentdetail);
  };
  // Handle booking an appointment
  const handleBooking = (appointmentDate, disease) => {
    if (!appointmentDate) {
      console.log(appointmentDate);
      setMessage("Please select an appointment date");
      return;
    }
    if (!disease) {
      console.log(disease);
      setMessage("Please select an disease");
      return;
    }
    setZero(1);
    addObject({ name, appointmentDate, disease });
    setMessage("Appointment booked successfully");
  };

  return (
    <div className="appointment-booking-container">
      <h4>Book an Appointment with {doctor.name}</h4>
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />
      <input
        type="text"
        value={disease}
        placeholder="Enter your disease"
        onChange={(e) => setDisease(e.target.value)}
      />
      <button onClick={() => handleBooking(appointmentDate, disease)}>
        Book Appointment
      </button>
      {zero===1 ? <p>{message}</p> : <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

// Define prop types for the component
// AppointmentBooking.propTypes = {
//   doctor: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     specialization: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default AppointmentBooking;
