import react from "react";
import { Header } from "./components/header/Header";
import "./styles.css";
//import { Launch } from "./components/Launch/Launch";
import { LaunchList } from "./components/LaunchList/LaunchList";
import  LaunchView  from "./components/LaunchView/LaunchView";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/launch/:flight_number">
              <LaunchView />
            </Route>
            <Route path="/">
              <LaunchList />
            </Route>
          </Switch>
        </Router>
    </div> 
  );
}

export default App;
