import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
