
import { Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import Headdoc from './Headdoc/Headdoc';
import Login from './components/Login/Login';


function App() {
 
  return (
    <div>
       <Routes>
        <Route path='/' exact element={<Homepage />}></Route>
        <Route path='login' exact element={<Login />}></Route>
        <Route path='hdoc' exact element={<Headdoc />}></Route>
        

       </Routes>
      
    </div>
  )
}

export default App
