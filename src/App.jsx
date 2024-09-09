import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../assets/Homepage';
import SupplierAccess from '../assets/SupplierAccess';
import Support from '../assets/Support';'./assets/Support';
import GeneralRequirement from '../assets/GeneralRequirement';
import LoginForm from '../assets/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Homepage />} />
        <Route path="/supplier" element={<SupplierAccess/>} />
        <Route path="/support" element={<Support />} />
        <Route path="/auth" element={<LoginForm/>} />
        <Route path="/generalrequirment" element={<GeneralRequirement />} />
      </Routes>
    </Router>
  );
}

export default App;
