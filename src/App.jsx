import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Support from "../assets/Support";
import SupplierAccess from "../assets/SupplierAccess";
import Homepage from "../assets/Homepage";
import Generalrequirment from "../assets/Generalrequirment";


function App() {
  return (
      

    <Router>
    <Switch>
    <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Homepage />} />
        <Route path="/supplier" element={<SupplierAccess />} />
        <Route path="/support" element={<Support />} />
        <Route path="/generalrequirment" element={<Generalrequirment/>} />
    </Switch>
  </Router>
    

    );
  }

export default App 