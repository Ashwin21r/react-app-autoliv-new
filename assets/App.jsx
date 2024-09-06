import SupplierAccess from "./SupplierAccess";
import Homepage from "./Homepage";
import Support from "./Support";
import Generalrequirment from "./Generalrequirment";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/main" component={Homepage} />
      <Route path="/main" component={Homepage} />
      <Route path="/supplieraccess" component={SupplierAccess} />
      <Route path="/support" component={Support} />
      <Route path="/genralrequirment" exact component={Generalrequirment} />
      <Route component={Homepage} /> {/* Fallback route for 404 */}
    </Switch>
  </Router>
    );
  }

export default App;
