import './App.css';

function App() {
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
