import React from "react";
import { createStore } from "redux";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const defaultState = { welcome: "Hi", otherState: "Some stuff" };

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case "GREET_ME":
      return { ...state, welcome: action.result };
    case "GREET_WORLD":
      return { ...state, welcome: "Hello World" };
    default:
      return state;
  }
};
const store = createStore(greeting);

const result = "Something from an API";

store.dispatch({ type: "GREET_ME", result });

console.log(store);
console.log(store.getState());
