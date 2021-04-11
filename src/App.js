import "./App.css";
import MouseTrigger from "./components/MouseTrigger";

function App() {
  return (
    <div className="App">
      <h1>Technical test Unkle</h1>
      <MouseTrigger focusPosition="bottom">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            Name
            <input type="text" name="name" data-tips={<div>write your name</div> } />
          </label>
          <button data-tips="send the form">Submit</button>
        </form>
      </MouseTrigger>
    </div>
  );
}

export default App;
