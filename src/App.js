import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Toogle from "./Toogle";

const store = createStore(rootReducer, {}, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
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
          <Toogle />
        </header>
      </div>
    </Provider>
  );
}

export default App;
