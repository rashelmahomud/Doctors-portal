import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appoinment from './Components/Pages/Appoinment/Appoinment';
import Home from './Components/Shared/Home/Home';
import Navber from './Components/Shared/Navber/Navber';
import NoteFound from './Components/Shared/NoteFound/NoteFound';


function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>

        <Route path='/*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
      

      

    </div>
  );
}

export default App;
