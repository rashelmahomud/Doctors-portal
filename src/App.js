import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import AppoinmentAll from './Components/Pages/Appoinment/AppoinmentAll';
import AddDoctor from './Components/Pages/DeashBoard/AddDoctor';
import DeashBoard from './Components/Pages/DeashBoard/DeashBoard';
import History from './Components/Pages/DeashBoard/History';
import ManageDoctors from './Components/Pages/DeashBoard/ManageDoctors';
import MyApointment from './Components/Pages/DeashBoard/MyApointment';
import MyReview from './Components/Pages/DeashBoard/MyReview';
import Users from './Components/Pages/DeashBoard/Users';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';
import Home from './Components/Shared/Home/Home';
import Navber from './Components/Shared/Navber/Navber';
import NoteFound from './Components/Shared/NoteFound/NoteFound';
import RequirAdmin from './Components/Shared/RequirAuth/RequirAdmin';
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

        <Route path='/deashboard' element={
          <RequirAuth>
            <DeashBoard>
            </DeashBoard>
          </RequirAuth>
        }>
          <Route index element={<MyApointment></MyApointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<RequirAdmin><Users></Users></RequirAdmin>}></Route>
          <Route path='addDoctor' element={<RequirAdmin><AddDoctor></AddDoctor></RequirAdmin>}></Route>
          <Route path='manageDoctor' element={<RequirAdmin><ManageDoctors></ManageDoctors></RequirAdmin>}></Route>
          <Route path='history' element={<History></History>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NoteFound></NoteFound>}></Route>
      </Routes>




    </div>
  );
}

export default App;
