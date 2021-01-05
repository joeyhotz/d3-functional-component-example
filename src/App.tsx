import React, { useState } from "react";
import D3Component from "./D3Component";

function App() {
  const [index, setIndex] = useState(0);
  const numberArray = Array.from(Array(index).keys());

  return (
    <>
      <div>
        <D3Component />
      </div>
    </>
  );
}

export default App;
