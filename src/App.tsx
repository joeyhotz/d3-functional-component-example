import React, { useState } from "react";
import D3Component from "./D3Component";

function App() {
  const [index, setIndex] = useState(0);
  const numberArray = Array.from(Array(index).keys());

  return (
    <>
      <button onClick={() => setIndex(index + 1)}> +1 </button>

      <div>
        <D3Component data={numberArray} />
      </div>
    </>
  );
}

export default App;
