import React, { useState, useEffect } from "react";
import axios from "axios";

// On initial render, - üres tömb van megadva 2.paraméternek
// On when a state or prop changes - tömbben meg van adva a state változó neve 2.paraméternek
// On every re-render - ha nincs megadva semmi 2.paraméternek

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  //  ez esetben mindenegyes rendereléskor lefut
  //   useEffect(() => {
  //     console.log("UseEffect Triggered everytime");
  //   });

  // csak egyszer fut le az első rendereléskor ha a 2.paraméterének megadott tömb(useState) üres
  useEffect(() => {
    console.log("UseEffect Triggered first time");
  }, []);

  //itt akkor fut le amikor a props állapota megváltozik. Ezesetben akkor változik meg, ha a gombbal növelem az értéket. Ha a useState-ben a count érték megváltozik.
  //Végül is a useState állapotának megváltozására működik a useEffect

  /*   useEffect(() => {
    console.log(`UseEffect Triggered props changed to ${count}`);

    //count érték változásától függ most a useEffect működése. Azt a useState változót kell ide írni amelyik megváltozására kell, hogy működjön a useEffect.
  }, [count]); //függőségi változó kell ide */

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data));

    /*     fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setData(data)); */
  }, [count]); //egy useEffect-el használom a két usestate-et

  console.log(data[0]);

  return (
    <div className="--center-all">
      <h1>{count}</h1>
      <button
        className="--btn --btn-primary"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <button
        className="--btn --btn-primary"
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
    </div>
  );
};

export default UseEffect;
