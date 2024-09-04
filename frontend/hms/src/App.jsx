import './App.css'
import DoctorSelection from './Components/DoctorSelection'
import HospitalSearch from './Components/HospitalSearch'
import AppointmentBooking from './Components/AppointmentBooking';
import hospital from './constant/index.js'
function App() {

  return (
    <>
    <DoctorSelection hospital={hospital}/>
    
    {/* <AppointmentBooking/>
    <HospitalSearch/> */}
    </>
  )
}

export default App
