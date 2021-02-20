import Home from '../src/components/home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
     
    </BrowserRouter>

  );
}

export default App;
