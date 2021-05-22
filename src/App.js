import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
