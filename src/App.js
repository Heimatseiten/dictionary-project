import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Dictionary</h1>
        <Search />
      </main>
      <footer>
        {" "}
        <a
          href="https://github.com/Heimatseiten/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>{" "}
        by Tine Lüttgen
      </footer>
    </div>
  );
}

export default App;
