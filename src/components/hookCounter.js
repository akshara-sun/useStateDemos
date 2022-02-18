import React, { useState } from "react";

export default function CounterHook() {
  let initialValue = 0;
  const [count, setCount] = useState(0);
  const [textColor, setColor] = useState("blue");

  return (
    <div>
      <div className="CounterHook">
        <p>Counter using useState hook</p>
        <h3 style={{ color: textColor }}>{count}</h3>
        <button
          onClick={() => {
            setCount(count - 1);
            setColor("orange");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(initialValue);
            setColor("white");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            setColor("yellow");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
