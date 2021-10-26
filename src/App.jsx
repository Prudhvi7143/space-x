import react from "react";
import { Header } from "./components/header/Header";
import "./styles.css";
//import { Launch } from "./components/Launch/Launch";
import { LaunchList } from "./components/LaunchList/LaunchList";

function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div> 
  );
}

export default App;
