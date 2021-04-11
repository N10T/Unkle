import React from "react";
import "./App.css";
import {TipsContext} from "./context";

import MouseTrigger from "./components/MouseTrigger";

function App() {

  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger isMouseFollow focusPosition="bottom">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            Name
            <Tips>
            <input type="text" name="name" />
            write your name
            </Tips>
          </label>
          <Tips>
            <button>Submit</button>
            <div className="tips">
              <h1>super tips</h1>
              <p>try to use HTML as tips</p>
            </div>
          </Tips>
        </form>
      </MouseTrigger>
    </div>
  );
}

function Tips({ children }) {
  const { setTip } = React.useContext(TipsContext);
  const childrenArray = React.Children.toArray(children)
  const extraProps = currentTip => ({
    onFocus: () => setTip(currentTip),
    onBlur: () => setTip(""),
    onMouseEnter: () => setTip(currentTip),
    onMouseLeave: () => setTip(""),
  });

  return React.cloneElement(childrenArray[0],extraProps(childrenArray[1]))
}
export default App;
