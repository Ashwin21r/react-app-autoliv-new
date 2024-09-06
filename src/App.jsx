import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Supplier from './components/Supplier';
import Support from './components/Support';
import GeneralRequirement from './components/GeneralRequirement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Homepage />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/support" element={<Support />} />
        <Route path="/generalrequirment" element={<GeneralRequirement />} />
      </Routes>
    </Router>
  );
}

export default App;
