import React from "react";
import GlobalStyles from "../src/global/style";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../src/routes";
import { ModalProvider } from "styled-react-modal";

function App() {
  return (
    <ModalProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </ModalProvider>
  );
}

export default App;
