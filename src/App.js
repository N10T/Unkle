import "./App.css";
import React, { useState, useEffect } from "react";

const setTooltip = (e, setTip, setTarget) => {
  const { x, y, height, width } = e.target.getBoundingClientRect();
  setTip(e.target.dataset.tips);
  setTarget({ x, y, height, width });
};
let count = 0
function MouseTrigger({ children, position = "bottom" }) {
  const [tip, setTip] = useState("");
  const [target, setTarget] = useState({ x: 0, y: 0, height: 0, width: 0 });

  const { x, y, height, width } = target;

  const style = {
    top: { top: y - height, left: x },
    right: { top: y, left: x + width },
    bottom: { top: y + height, left: x },
    left: { top: y, left: x - width },
  }[position];
  count ++
console.log("render",count)
  const ref = React.useRef(null);
  //initialisation of mouse move triggering
  useEffect(() => {
    const element =  ref.current;
    element.addEventListener("mousemove", (e) => setTooltip(e, setTip, setTarget));
    return () => element.removeEventListener("mousemove", setTooltip);
  }, [ref]);

  return (
    <>
      {tip && (
        <div className="tips" style={{ ...style, minWidth: width }}>
          {tip}
        </div>
      )}
      <div ref={ref}>{children}</div>
    </>
  );
}

function App() {
  
  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" data-tips="write your name" />
          </label>
          <button data-tips="send the form">Submit</button>
        </form>
      </MouseTrigger>
    </div>
  );
}

export default App;
