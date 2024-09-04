import Supplier from "./Supplier";
import Homepage from "./Homepage";
import Support from "./Support";
import Generalrequirment from "./Generalrequirment";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/main" component={Homepage} />
      <Route path="/supplier" component={Supplier} />
      <Route path="/support" component={Support} />
      <Route path="/genralrequirment" exact component={Generalrequirment} />
    </Switch>
  </Router>
    );
  }

export default App;
