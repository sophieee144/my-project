import { Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import Headdoc from './Headdoc/Headdoc';
import Login from './components/Header/Login/Login';
import DoctorAccount from './Headdoc/Manageacconts/Doctors/DoctorAccount';
import RegisterDoc from './Headdoc/Manageacconts/Doctors/RegisterDoc';
import Patientdata from './Headdoc/PatientData/PatientData'
import Chart from './Headdoc/Chart/Chart'
import DocInfo from './Headdoc/Manageacconts/Doctors/DocInfo'
import ForgotPassword from './components/Header/Login/ForgotPassword'
import EditInfo from './Headdoc/Manageacconts/Doctors/EditInfo';

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
          <Route path='docinformation' exact element={<DocInfo />}></Route>
          <Route path='forgotpassword' exact element={<ForgotPassword />}></Route>
          <Route path='editinfo' exact element={<EditInfo />}></Route>
          
      </Routes>
      
    </div>
  )
}

export default App
