import { useState } from "react";
import "./App.css";
import { Tooltip } from "@reach/tooltip";
import "@reach/tooltip/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Tooltip
      label={"this is a counter button"}
      aria-label={"Count is " + count}
    >
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        count is {count}
      </button>
    </Tooltip>
  );
}

export default App;
