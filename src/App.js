import React from "react";

import Tip from "./components/Tip"
import Tooltip from "./components/Tooltip";

import "./App.css";

function App() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <Tooltip isMouseFollow>
        <form className="form" onSubmit={preventDefault}>
          <label htmlFor="name">
            Name
            <Tip>
              <input type="text" name="name" />
              write your name
            </Tip>
          </label>
          <Tip>
            <button>Submit</button>
            <div className="tips">
              <h1>super tips</h1>
              <p>try to use HTML as tips</p>
            </div>
          </Tip>
        </form>
      </Tooltip>
    </div>
  );
}

export default App;
