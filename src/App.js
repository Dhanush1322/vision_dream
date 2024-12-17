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
import Login from './Component/Login';

//admin dashboard
import DashboardPage from './dashboard/pages/DashboardPage'
import Appointment from './dashboard/pages/Appointment';
import EditPassword from './dashboard/pages/EditPasswordPage';
import AddBanner from './dashboard/pages/AddBanner';
import UpadateBanner from './dashboard/pages/UpadateBanner';
import EditBanner from './dashboard/pages/EditBanner';


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
      
        <Route path="/Login" element={ <Login />} />

        {/* Admin Dashboard */}
        <Route path="/DashboardPage" element={ <DashboardPage />} />
        <Route path="/Appointment" element={ <Appointment />} />
        <Route path="/AddBanner" element={ <AddBanner />} />
        <Route path="/EditPassword" element={ <EditPassword />} />
        <Route path="/UpdateBanner" element={ <UpadateBanner />} />
        <Route path="/EditBanner" element={ <EditBanner />} />


      </Routes>
    </Router>
  );
}

export default App;
