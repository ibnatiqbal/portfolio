import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
