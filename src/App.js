import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import AppoinmentAll from './Components/Pages/Appoinment/AppoinmentAll';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';
import Home from './Components/Shared/Home/Home';
import Navber from './Components/Shared/Navber/Navber';
import NoteFound from './Components/Shared/NoteFound/NoteFound';
import RequirAuth from './Components/Shared/RequirAuth/RequirAuth';


function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinmentall' element={
          <RequirAuth>
            <AppoinmentAll></AppoinmentAll>
          </RequirAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NoteFound></NoteFound>}></Route>
      </Routes>




    </div>
  );
}

export default App;
