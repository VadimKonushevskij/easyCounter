import "./App.css";
import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  function onMinusButtonClick() {
    setCounter(counter - 1);
  }
  function onPlusButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h2>Counter:</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={onMinusButtonClick}>-</button>
        <button onClick={onPlusButtonClick}>+</button>
      </div>
    </div>
  );
}

export default App;
