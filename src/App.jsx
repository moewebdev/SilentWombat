//import './App.css'
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';  
import Accommodations from './pages/Accommodations'; 
import Activities from './pages/Activities'; 
import Contact from './pages/Contact'; 
import Transportation from './pages/Transportation'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NoMatch />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/accommodations" element={<Accommodations />}/>
        <Route path="/activities" element={<Activities />}/>
        <Route path="/transportation" element={<Transportation/>}/>
      </Routes>
    </Router>
  )
}

export default App
