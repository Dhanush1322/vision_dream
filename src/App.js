import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import FounderAndLeadership from './Component/FounderAndLeadership';
import Leadership from './Component/Leadership';
import Management from './Component/Management';
import Team from './Component/Team';
import BusinessModule from './Component/BusinessModule';
import SymenticService from './Component/SymenticService';
import DiscovoryService from './Component/DiscovoryService';
import Technology from './Component/Technology';
import BookanAppointment from './Component/BookanAppointment';
import Synthetic_Chemicle from './Component/Synthetic_Chemicle';
import AnalyticleCapability from './Component/AnalyticleCapability';
import Product from './Component/Product';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Us Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/FounderAndLeadership" element={<FounderAndLeadership />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/Team" element={<Team />} />

        {/* Services Routes */}
        <Route path="/BusinessModule" element={<BusinessModule />} />
        <Route path="/SymenticService" element={<SymenticService />} />
        <Route path="/DiscovoryService" element={<DiscovoryService />} />
        
          {/*Technology Routes */}
        <Route path="/Technology" element={<Technology />} />
         {/*Infrastucture  Routes */}
         <Route path="/Synthetic_Chemicle" element={<Synthetic_Chemicle />} />
         <Route path="/AnalyticleCapability" element={<AnalyticleCapability />} />

        {/* Contact and Appointment Routes */}
        <Route path="/product" element={<Product />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/BookanAppointment" element={<BookanAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
