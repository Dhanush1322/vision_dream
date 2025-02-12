import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './userlogin/Login';

import DashboardPage from './dashboard/pages/DashboardPage'
import Appointment from './dashboard/pages/Appointment';
import EditPassword from './dashboard/pages/EditPasswordPage';
import AddBanner from './dashboard/pages/AddBanner';
import UpadateBanner from './dashboard/pages/UpadateBanner';
import EditBanner from './dashboard/pages/EditBanner';
import UserProfileAccess from './dashboard/pages/UserProfileAccess';
import BlockUser from './dashboard/pages/BlockUser';
import UnblockUser from './dashboard/pages/UnblockUser';

function App() {
  return (
    <Router>
      <Routes>
       
      <Route path="/" element={ <Login />} />
        {/* Admin Dashboard */}
        <Route path="/DashboardPage" element={ <DashboardPage />} />
        <Route path="/EditPassword" element={ <EditPassword />} />
        <Route path="/UserProfileAccess" element={ <UserProfileAccess />} />
        <Route path="/BlockUser" element={ <BlockUser />} />
        <Route path="/UnblockUser" element={ <UnblockUser />} />
        <Route path="/Appointment" element={ <Appointment />} />
        <Route path="/AddBanner" element={ <AddBanner />} />
        
        <Route path="/UpdateBanner" element={ <UpadateBanner />} />
        <Route path="/EditBanner" element={ <EditBanner />} />
      </Routes>
    </Router>
  );
}

export default App;
