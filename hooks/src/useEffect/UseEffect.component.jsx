import React, { useState, useEffect } from "react";

// On every re-render
// On initial render
// On when a state or prop changes

const UseEffect = () => {
  const [count, setCount] = useState(0);

  //  ezesetben mindenegyes rendereléskor lefut
  //   useEffect(() => {
  //     console.log("UseEffect Triggered everytime");
  //   });

  // csak egyszer fut le az első rendereléskor ha a 2.paraméterének megadott tömb üres
  useEffect(() => {
    console.log("UseEffect Triggered first time");
  }, []);

  //itt akkor fut le amikor a props megváltozik
  //ezesetben akkor változik meg, ha a gombbal növelem az értéket
  useEffect(() => {
    console.log(`UseEffect Triggered props changed to ${count}`);
  }, [count]);

  return (
    <div className="--center-all">
      <h1>{count}</h1>
      <button
        className="--btn --btn-primary"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
};

export default UseEffect;
