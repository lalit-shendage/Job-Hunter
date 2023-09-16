import './assets/Style/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import JobList from './pages/JobList';
import Application from './pages/Application'
import Navbar from './components/Navbar'
import JobDetails from './pages/JobDetails';

function App() {
  
  return (
    <div className='app'>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/JobListings" element={<JobList/>} />
        <Route exact path="/JobDetails/:id" element={<JobDetails />} />
        <Route exact path="/Form" element={<Application/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
