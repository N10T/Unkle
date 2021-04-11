import React, { useRef, useEffect } from "react";
import "./App.css";

import MouseTrigger from "./components/MouseTrigger";

function App() {
  const nameRef = useRef(null),
    buttonRef = useRef(null);

  const refs = { nameRef, buttonRef };

  // const myRef = (element) => {
  //   return element && refs[element.name || element.dataset.name];
  // };

  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger isMouseFollow focusPosition="bottom" refs={refs}>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" ref={nameRef} data-tips="write your name" />
          </label>
          <Tips>
            <button data-name="button">Submit</button>
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
  return (
    <>
      {React.Children.map(children, (child, index) => {
        // add event listner to the first child
        if (index === 0) {
          const extraProps = {
            onFocus: () => console.log("focus in"),
            onBlur: () => console.log("focus out"),
            onMouseEnter: () => console.log("onMouseEnter"),
            onMouseLeave: () => console.log("onMouseLeave"),
          };
          return React.cloneElement(child, extraProps);
          // return <Child></Child>
        } else {
          return child;
        }
      })}
    </>
  );
}
export default App;
