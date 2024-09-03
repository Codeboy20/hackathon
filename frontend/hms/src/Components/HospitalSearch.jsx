import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorSelection from './DoctorSelection'; // Import the DoctorSelection component

const HospitalSearch = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hospitals')
      .then(response => setHospitals(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <div>
      <h2>Search Hospitals</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital._id} onClick={() => handleHospitalSelect(hospital)}>
            {hospital.name} - {hospital.location}
          </li>
        ))}
      </ul>

      {selectedHospital && <DoctorSelection hospital={selectedHospital} />}
    </div>
  );
};

export default HospitalSearch;
