import React, { useState, useEffect } from "react";
import { TipsContext } from "../context";

export default function Tooltip({ children, isMouseFollow, position: initPosition = "bottom" }) {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(isMouseFollow ? "free" : initPosition);
  const [target, setTarget] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const [tip, setTip] = useState("");

  const { x, y, height, width } = target;

  const styles = {
    top: { top: y - height, left: x },
    right: { top: y, left: x + width },
    bottom: { top: y + height, left: x },
    left: { top: y, left: x - width },
    free: { top: mousePosition.y + 10, left: mousePosition.x + 10 },
  };

  const style = { ...styles[position], minWidth: width };

  const tipToRender =
    typeof tip === "string" ? (
      <div className="tips" style={style}>
        {tip}
      </div>
    ) : (
      React.cloneElement(tip, { style })
    );

  //To trigger the mouse position
  useEffect(() => {
    if (isMouseFollow) {
      document.onmousemove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, [isMouseFollow, mousePosition]);

  //To prevent a unset position
  useEffect(() => {
    if (initPosition && !Object.keys(styles).includes(position))
      throw new Error(initPosition + " is not a valid position prop for the component");
  }, [initPosition]);

  return (
    <TipsContext.Provider value={{ tip, setTip, setTarget }}>
      {tip && tipToRender}
      {children}
    </TipsContext.Provider>
  );
}
