import Home from '../src/components/home'
import Airline_project from '../src/components/airline'
import Trolley_project from '../src/components/iot'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact = {true} />
            <Route path="/project/airline" component={Airline_project} />
            <Route path="/project/iot" component={Trolley_project} />

        </Switch>
     
    </BrowserRouter>

  );
}

export default App;
