import "./App.css"
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Design Patterns</p>
        <a
          className="App-link"
          href="/creationals"
          rel="noopener noreferrer"
        >
          Creational Patterns
        </a>
        <a
          className="App-link"
          href="/structurals"
          rel="noopener noreferrer"
        >
          Structurals Patterns
        </a>
      </header>
    </div>
  )
}

export default App
