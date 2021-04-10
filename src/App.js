import './App.css';
import React,{useState, useEffect} from 'react'

function App() {
  const [tip, setTip] = useState({content:"", position:[], width:0})
console.log("rerender");
  //initialisation of mouse move triggering
  useEffect(() => {
    const logData = e => {
      e.target.dataset?.tips && console.log(e.target.dataset.tips,e.target.getBoundingClientRect())
      
      const boxElement = e.target.getBoundingClientRect()
      setTip({
        content: e.target.dataset.tips, 
        position: [boxElement.x,boxElement.y+boxElement.height],
        width:boxElement.width
      })
    }

    window.addEventListener("mousemove", logData);
    return () => window.removeEventListener("mousemove", logData);
  }, []);

  return (
    <div className="App">
      {tip.content && <div className="tips" style={{top:tip.position[1], left:tip.position[0],minWidth:tip.width}}>{tip.content}</div>}
      <h1>Technical test Unkle</h1>
      <form className="form" onSubmit={e=>e.preventDefault()}>
        <label htmlFor="name">Name
        <input type="text" name="name" data-tips="write your name"/></label>
        <button data-tips="send the form">Submit</button>
      </form>
    </div>
  );
}

export default App;
