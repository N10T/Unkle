import React from "react";
import { TipsContext } from "../contexts/context";

export default function Tip({ children }) {
  const { setTip, setTarget } = React.useContext(TipsContext);
  const [element, currentTip] = React.Children.toArray(children);
  
  if (React.Children.count(children) !== 2) {
    throw new Error("Tip component need to have 2 children, 1)Element to tip 2)The tip");
  }
  
  const openTooltip = (e) => {
    const { x, y, height, width } = e.target.getBoundingClientRect();
    setTip(currentTip);
    setTarget({ x, y, height, width });
  };

  const closeTooltip = () => {
    setTip("");
  };

  const extraProps = {
    onFocus: openTooltip,
    onBlur: closeTooltip,
    onMouseEnter: openTooltip,
    onMouseLeave: closeTooltip,
  };

  return React.cloneElement(element, extraProps);
}
