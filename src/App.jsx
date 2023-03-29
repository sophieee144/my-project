
import { Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import Headdoc from './Headdoc/Headdoc';
import Login from './components/Login/Login';
import Doctoraccount from './Headdoc/Manageacconts/Doctoraccount';
import Register from './Headdoc/Manageacconts/Register';
import Patientdata from './Headdoc/Patientdata/Patientdata'
import Chart from './Headdoc/Chart/Chart'



function App() {
 
  return (
    <div>
       <Routes>
        <Route path='/' exact element={<Homepage />}></Route>
        <Route path='login' exact element={<Login />}></Route>
        <Route path='hdoc' exact element={<Headdoc />}></Route>
        <Route path='doc' exact element={<Doctoraccount />}></Route>
        <Route path='register' exact element={<Register />}></Route>
        <Route path='charts' exact element={<Chart />}></Route>
        <Route path='patientdata' exact element={<Patientdata />}></Route>

        

       </Routes>
      
    </div>
  )
}

export default App
