import './App.css';
import React from 'react'

function App() {

  React.useEffect(() => {

    const logData = e => {e.target.dataset?.tips && console.log(e.target.dataset.tips)}
    
    window.addEventListener("mousemove", logData);
  
    return () => window.removeEventListener("mousemove", logData);
  }, []);

  return (
    <div className="App">
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
