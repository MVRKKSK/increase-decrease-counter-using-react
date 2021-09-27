import React, { useState } from "react";





function App() {
  const [count, SetCount] = useState(0);

  function Increase() {
     SetCount(count+1);

  }
  function Decrease() {
    SetCount(count-1);

 }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
