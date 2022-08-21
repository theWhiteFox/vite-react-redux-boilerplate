import React from "react";
import { Counter } from "../src/features/counter/Counter";
import logo from "../src/assets/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <p>
            <a
              className="App-link"
              href="https://github.com/theWhiteFox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://tanstack.com/router/v4"
              target="_blank"
              rel="noopener noreferrer"
            >
              TanStack Router
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  );
}

export default App;
