import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * @prop  {Component} children element wrapped inside this component
 * @prop  {Boolean} isMouseFollow to have the tip following the mouse
 * @prop  {String} focusPosition to set the position of the tip on focus (default bottom)
 */
 export default function MouseTrigger({ children, isMouseFollow, focusPosition="bottom" }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState(isMouseFollow ? "free" : "bottom");
    const [target, setTarget] = useState({ x: 0, y: 0, height: 0, width: 0 });
    const [tip, setTip] = useState("");
  
    const setTooltip = useCallback(
      (e) => {
        const { x, y, height, width } = e.target.getBoundingClientRect();
        setTip(e.target.dataset.tips);
        if (e.type === "mousemove") {
          setMousePosition({ x: e.clientX, y: e.clientY });
        } else {
          setPosition(focusPosition);
        }
        setTarget({ x, y, height, width });
      },
      [focusPosition]
    );
  
    const targetRef = useRef(null);
    const { x, y, height, width } = target;
    const style = {
      top: { top: y - height, left: x },
      right: { top: y, left: x + width },
      bottom: { top: y + height, left: x },
      left: { top: y, left: x - width },
      free: { top: mousePosition.y + 10, left: mousePosition.x + 10 },
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
  
    //set position
    useEffect(() => {
      if(isMouseFollow) return
      else if(mousePosition.y < (target.y + target.height / 2)) setPosition("bottom")
      else setPosition("top")
  
    }, [isMouseFollow,mousePosition,target])

    return (
      <>
        {tip && (
          <div className="tips" style={{ ...style, minWidth: width }}>
            {tip }
          </div>
        )}
        <div ref={targetRef}>{children}</div>
      </>
    );
  }