import { Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import Headdoc from './Headdoc/Headdoc';
import Login from './components/Header/Login/Login';
import UnitAccouts from './Headdoc/Manageacconts/Units/UnitAccouts';
import RegisterDoc from './Headdoc/Manageacconts/Doctors/RegisterDoc';
import Chart from './Headdoc/Chart/Charts'
import DocInfo from './Headdoc/Manageacconts/Doctors/DocInfo'
import ForgotPassword from './components/Header/Login/ForgotPassword'
import EditInfo from './Headdoc/Manageacconts/Doctors/EditInfo';
import DoctorAccounts from './Headdoc/Manageacconts/Doctors/DoctorAccounts'
import Inbox from './Headdoc/Inbox/Inbox';

function App() {
 
  return (
    <div>
      <Routes>
          <Route path='/' exact element={<Homepage />}></Route>
          <Route path='login' exact element={<Login />}></Route>
          <Route path='hdoc' exact element={<Headdoc />}></Route>
          <Route path='unit' exact element={<UnitAccouts />}></Route>
          <Route path='registerdoc' exact element={<RegisterDoc />}></Route>
          <Route path='charts' exact element={<Chart />}></Route>
          <Route path='docinformation' exact element={<DocInfo />}></Route>
          <Route path='forgotpassword' exact element={<ForgotPassword />}></Route>
          <Route path='editinfo' exact element={<EditInfo />}></Route>
          <Route path='doc' exact element={<DoctorAccounts />}></Route>
          <Route path='inbox' exact element={<Inbox />}></Route>
          
      </Routes>
      
    </div>
  )
}

export default App
