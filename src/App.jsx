import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route exact path="/properties/:id" Component={DetailsPage} />
          <Route path="/checkout" Component={Checkout} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
