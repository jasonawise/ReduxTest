import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Toogle from "./Toogle";

const middleWare = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare))
);

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
          ></a>
          <Toogle />
        </header>
      </div>
    </Provider>
  );
}

export default App;
