import "./App.css";
import React, { useState, useEffect, useRef, useCallback } from "react";

function MouseTrigger({ children, hoverPosition, focusPosition }) {
  const [tip, setTip] = useState("");
  const [target, setTarget] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(hoverPosition);

  const setTooltip = useCallback(
    (e) => {
      const { x, y, height, width } = e.target.getBoundingClientRect();
      setTip(e.target.dataset.tips);
      if (e.type === "mousemove") {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setPosition(hoverPosition);
      } else {
        setPosition(focusPosition);
      }
      setTarget({ x, y, height, width });
    },
    [hoverPosition,focusPosition]
  );

  const targetRef = useRef(null);
  const { x, y, height, width } = target;
  const style = {
    top: { top: y - height, left: x },
    right: { top: y, left: x + width },
    bottom: { top: y + height, left: x },
    left: { top: y, left: x - width },
    free: { top: mousePosition.y + 3, left: mousePosition.x + 3 },
  }[position];

  //Set and reset tooltip params
  useEffect(() => {
    const element = targetRef.current;

    const resetTooltip = () => setTip("");
    element.addEventListener("mousemove", setTooltip);
    element.addEventListener("mouseleave", resetTooltip);
    element.querySelectorAll("[data-tips]").forEach((el) => {
      el.addEventListener("focusin", setTooltip);
      el.addEventListener("focusout", resetTooltip);
    });

    return () => {
      element.removeEventListener("mousemove", setTooltip);
      element.removeEventListener("mousemove", resetTooltip);
      element.querySelectorAll("[data-tips]").forEach((el) => {
        el.removeEventListener("focusin", setTooltip);
        el.removeEventListener("focusout", resetTooltip);
      });
    };
  }, [targetRef, setTooltip]);

  return (
    <>
      {tip && (
        <div className="tips" style={{ ...style, minWidth: width }}>
          {tip}
        </div>
      )}
      <div ref={targetRef}>{children}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger hoverPosition="free" focusPosition="bottom">
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
