import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import axios from 'axios';

const AppointmentBooking = ({ doctor }) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  // Handle booking an appointment
  const handleBooking = () => {
    axios
      .post('http://localhost:5000/api/appointments', {
        doctorName: doctor.name,
        specialization: doctor.specialization,
        date: appointmentDate,
      })
      .then(() => {  
        setMessage('Appointment booked successfully!');
      })
      .catch((error) => {
        setMessage('Failed to book the appointment.');
        console.error(error);
      });
  };

  return (
    <div>
      <h4>Book an Appointment with Dr. {doctor.name}</h4>
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Appointment</button>
      {message && <p>{message}</p>}
    </div>
  );
};

// Define prop types for the component
AppointmentBooking.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppointmentBooking;
