import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    /* így csak 1-el csökkenti */

    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    /* ha 2-szer hívjuk meg akkor 2-vel növeli */

    setCount((count) => count + 1);
  };

  let color = "#444";

  if (count >= 1) {
    color = "blue";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#444";
  }

  return (
    <div>
      <section className="--flex-center --100vh --bg-primary">
        <div className="container --bg-light --p2 --m2 --center-all">
          <h3>React Counter Page</h3>

          <h1 style={{ color: color }}>{count}</h1>

          <div className="buttons --flex-center">
            <button className="--btn --btn-danger" onClick={handleSubtract}>
              Subtract
            </button>
            <button className="--btn" onClick={handleReset}>
              Reset
            </button>
            <button className="--btn --btn-primary" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
