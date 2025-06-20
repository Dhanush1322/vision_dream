
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardRoutes from "./router/DashboardRoutes";

function App() {
  return (
    <Router>
      
      <DashboardRoutes />
    </Router>
    
  );
}

export default App;
