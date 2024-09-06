import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Support from "../assets/Support";
import SupplierAccess from "../assets/Supplier";
import Homepage from "../assets/Homepage";
import Generalrequirment from "../assets/Generalrequirment";


function App() {
  return (
      

    <Router>
    <Switch>
    <Route path="/" component={Homepage} />
      <Route path="/main" component={Homepage} />
      <Route path="/supplier" component={SupplierAccess} />
      <Route path="/support" component={Support} />
      <Route path="/genralrequirment" exact component={Generalrequirment} />
      <Route component={Homepage} /> {/* Fallback route for 404 */}
    </Switch>
  </Router>
    

    );
  }

export default App 