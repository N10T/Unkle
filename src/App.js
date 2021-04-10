import "./App.css";
import React, { useState, useEffect } from "react";
let count = 0

const setTooltip = (e, setTip, setTarget,setMousePosition) => {
  const { x, y, height, width } = e.target.getBoundingClientRect();
  setTip(e.target.dataset.tips);
  setTarget({ x, y, height, width });
  setMousePosition({x:e.clientX,y:e.clientY})
};

function MouseTrigger({ children, position="free" }) {
  const [tip, setTip] = useState("");
  const [target, setTarget] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

  const { x, y, height, width } = target;

  const style = {
    top: { top: y - height, left: x },
    right: { top: y, left: x + width },
    bottom: { top: y + height, left: x },
    left: { top: y, left: x - width },
    free: { top: mousePosition.y + 3, left: mousePosition.x + 3 },
  }[position];
  count ++
console.log("render",count)
  const ref = React.useRef(null);
  //initialisation of mouse move triggering & mouse leaving
  useEffect(() => {
    const element =  ref.current;
    const mouseMoveHandler = (e) => setTooltip(e, setTip, setTarget,setMousePosition)
    const mouseLeaveHandler = () => setTip("")
    element.addEventListener("mousemove", mouseMoveHandler);
    element.addEventListener("mouseleave", mouseLeaveHandler);
    return () => {
      element.removeEventListener("mousemove", mouseMoveHandler)
      element.removeEventListener("mousemove", mouseLeaveHandler)
    };
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
      <MouseTrigger position="free">
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
