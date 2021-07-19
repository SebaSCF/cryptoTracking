import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import CryptoDetails from "./Components/CryptoDetails";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Dashboard} exact path="/" />
          <Route path="/:id" component={CryptoDetails} >
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
