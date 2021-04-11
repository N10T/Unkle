import React, { useRef, useEffect } from "react";
import "./App.css";

import MouseTrigger from "./components/MouseTrigger";

function App() {
  const nameRef= useRef(null), buttonRef= useRef(null)

  const refs = {nameRef,buttonRef}
  const myRef = (element) => {
    return element && refs[element.name || element.dataset.name];
  };

  // const setRef = element => {
  //   refs[element.name] = useRef(null)
  //   return myRef(element)
  // }


  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger focusPosition="bottom" refs={refs}>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" ref={nameRef} data-tips="write your name" />
          </label>
          <button data-tips="send the form" data-name="button" ref={buttonRef}>
            Submit
          </button>
        </form>
      </MouseTrigger>
    </div>
  );
}

export default App;
