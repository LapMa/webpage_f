import React from "react";
import Navbar from "./Component/Navbar";
import {HashRouter as Router,Routes ,Route} from 'react-router-dom';
import LoginRegist from "./Component/LoginRegist";
import ScoreBoard from "./Component/ScoreBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/loginpage" element={<LoginRegist/>}/>
        <Route path="/scoreboard" element={<ScoreBoard/>}/>
      </Routes>
    </Router>
  );

}

export default App;
