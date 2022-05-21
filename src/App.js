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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Myappointment from './Components/Dashboard/Myappointment';
import Myreview from './Components/Dashboard/Myreview';
import User from './Components/Dashboard/User';
import RequireAdmin from './Components/Shared/RequireAdmin/RequireAdmin';
import Adddoctor from './Components/Adddoctor/Adddoctor';
import Managedoctor from './Components/Dashboard/Managedoctor';
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
     <Route path="/dashboard" element={<Requireauth>
      <Dashboard/>
     </Requireauth>}>
       <Route index element={<Myappointment/>} />
       <Route path="myreview" element={<Myreview/>} />
       <Route path="adddoctor" element={<Adddoctor/>} />
       <Route path="managedoctor" element={<Managedoctor/>} />
       <Route path="users" element={
         <RequireAdmin>
           <User/>
         </RequireAdmin>
       } />
       </Route> 
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/review" element={<Review/>}/>
     <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   <ToastContainer/>
    </div>
  );
}

export default App;
