import React from "react";
import { TipsContext } from "../context";

export default function Tip({ children }) {
    const { setTip, setTarget } = React.useContext(TipsContext);
    const [input, currentTip] = React.Children.toArray(children);
  
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
  
    return React.cloneElement(input, extraProps);
  }