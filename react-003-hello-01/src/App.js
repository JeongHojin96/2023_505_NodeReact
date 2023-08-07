import logo from "./logo.svg";
import "./App.css";
import Add from "./comps/Add.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Add />
    </div>
  );
}

export default App;
