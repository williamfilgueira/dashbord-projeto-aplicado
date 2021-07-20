import React from "react";
import GlobalStyles from "../src/global/style";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "../src/routes"; 

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>


  );
}

export default App;
