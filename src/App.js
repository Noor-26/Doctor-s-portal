import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Navber from './Components/Shared/Navber/Navber';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Review from './Components/Review/Review';
import Footer from './Components/Shared/Footer/Footer';
import Requireauth from './Components/Shared/Requireauth/Requireauth';

function App() {

  return (
    <div className="App">
      <Navber/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/appointment" element={<Requireauth>
      <Appointment/>
     </Requireauth>}/> 
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/Review" element={<Review/>}/>
     <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
