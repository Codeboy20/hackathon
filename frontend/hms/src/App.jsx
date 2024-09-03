import './App.css'
import DoctorSelection from './Components/DoctorSelection'
import HospitalSearch from './Components/HospitalSearch'
import AppointmentBooking from './Components/AppointmentBooking'
function App() {

  const hospital = {
    name: "ABC Hospital",
    location: "New York, USA",
    doctors: [
      {name: "Dr. John Doe", specialization: "Cardiology"},
      {name: "Dr. Jane Smith", specialization: "Pediatrics"},
      {name: "Dr. Michael Johnson", specialization: "Dermatology"}
    ]
  }

  return (
    <>
    <DoctorSelection hospital={hospital}/>
    
    {/* <AppointmentBooking/>
    <HospitalSearch/> */}
    </>
  )
}

export default App
