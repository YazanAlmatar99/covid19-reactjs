import React from "react";
import covid from "./Components/covid19";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Route exact path="/" component={covid} />
      </Router>
    </div>
  );
}

export default App;
