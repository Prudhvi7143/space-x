import react from "react";
import { Header } from "./components/header/Header";
import "./styles.css";
import { Launch } from "./components/Launch/Launch";

function App() {
  return (
    <div className="App">
      <Header />
      <Launch 
        banner = "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
        title = "FalconSat"
        LaunchDate = "2006-03-25T10:30:00+12:00"
        discription = "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost 
                   due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary 
                   payload owner's contractual right to decline a second ignition of the second stage under some conditions."
      />

            <Launch 
        banner = "https://farm8.staticflickr.com/7281/16668845950_7680146525_o.jpg"
        title = "DemoSat"
        LaunchDate = "2007-03-21T13:10:00+12:00"
        discription = "Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster 
                       vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following 
                       touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with 
                       extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle."
      />
    </div> 
  );
}

export default App;
