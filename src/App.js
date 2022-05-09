import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Shared/Home/Home';
import Navber from './Components/Shared/Navber/Navber';


function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>

      

    </div>
  );
}

export default App;
