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
          
            <Tip>
              <input className="input" type="text" name="name" placeholder="Name" />
              write your name
            </Tip>
            <Tip>
              <input className="input" type="email" name="email" placeholder="Email" />
              write your mail
            </Tip>
            <Tip>
              <input className="input" type="password" name="password" placeholder="Password" />
              Password required >7 characters
            </Tip>

          <Tip>
            <button className="button">Submit</button>
            <div className="input tips">
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
