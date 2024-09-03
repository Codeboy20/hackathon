import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import AppointmentBooking from './AppointmentBooking';
// import { Route } from 'react-router-dom'; 
import '../App.css';

const DoctorSelection = ({ hospital }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Check if the hospital and doctors data are available
  if (!hospital || !hospital.doctors || hospital.doctors.length === 0) {
    return <p class="no-doctors-message">No doctors available or loading hospital details...</p>;
  }

return (
  <div class="doctor-selection-container">
    <h3>Select a Doctor from {hospital.name}</h3>
    <div class="doctor-list">
      {hospital.doctors.map((doctor, index) => (
        <h5 key={index} class="doctor-item" onClick={() => handleDoctorSelect(doctor)}>
          {doctor.name} - {doctor.specialization}
        </h5>
      ))}
    </div>

    {selectedDoctor ? <AppointmentBooking doctor={selectedDoctor} class="appointment-booking" /> : ""}
  </div>
)};
export default DoctorSelection
// 
// // Define prop types for the component
// DoctorSelection.propTypes = {
//   hospital: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     doctors: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         specialization: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// // };

