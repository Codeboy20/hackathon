import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import AppointmentBooking from './AppointmentBooking';

const DoctorSelection = ({ hospital }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Check if the hospital and doctors data are available
  if (!hospital || !hospital.doctors || hospital.doctors.length === 0) {
    return <p>No doctors available or loading hospital details...</p>;
  }

  return (
    <div>
      <h3>Select a Doctor from {hospital.name}</h3>
      <ul>
        {hospital.doctors.map((doctor, index) => (
          <li key={index} onClick={() => handleDoctorSelect(doctor)}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>

      {selectedDoctor && <AppointmentBooking doctor={selectedDoctor} />}
    </div>
  );
};

// Define prop types for the component
DoctorSelection.propTypes = {
  hospital: PropTypes.shape({
    name: PropTypes.string.isRequired,
    doctors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        specialization: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DoctorSelection;
