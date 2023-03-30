
import { Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import Headdoc from './Headdoc/Headdoc';
import Login from './components/Login/Login';
import DoctorAccount from './Headdoc/Manageacconts/DoctorAccount';
import RegisterDoc from './Headdoc/Manageacconts/RegisterDoc';
import Patientdata from './Headdoc/PatientData/PatientData'
import Chart from './Headdoc/Chart/Chart'
import DeleteModal from './Headdoc/Manageacconts/DeleteModal'



function App() {
 
  return (
    <div>
      <Routes>
          <Route path='/' exact element={<Homepage />}></Route>
          <Route path='login' exact element={<Login />}></Route>
          <Route path='hdoc' exact element={<Headdoc />}></Route>
          <Route path='doc' exact element={<DoctorAccount />}></Route>
          <Route path='registerdoc' exact element={<RegisterDoc />}></Route>
          <Route path='charts' exact element={<Chart />}></Route>
          <Route path='patientdata' exact element={<Patientdata />}></Route>
          <Route path='deletemodal' exact element={<DeleteModal />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
