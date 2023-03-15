import React, { useState } from "react";

const UseState = () => {
  let text = ["Text2"];
  let arrayText = ["elem1 ", "elem2 ", "elem3 "];

  const [text1, setText1] = useState("Text 1");
  const [text2, setText2] = useState(text);
  const [text3, setText3] = useState(arrayText);

  const handleClick1 = () => {
    setText1("Text Changed 1");
  };

  const handleClick2 = () => {
    setText2("Text Changed 2");
  };

  const handleClick3 = () => {
    setText3("Text Changed 3");
  };

  return (
    <div>
      {/* CSS az előre elkészített basic index.css anyagból */}
      <section className="--flex-center --100vh">
        <div className="container --center-all">
          <h3>React Page</h3>
          <h1>{text1}</h1>, <h1>{text2}</h1>
          <h1>{text3}</h1>
          <button
            className="--btn --btn-primary --btn-lg"
            onClick={handleClick1}
          >
            Change Text 1
          </button>
          <button
            className="--btn --btn-primary --btn-lg"
            onClick={handleClick2}
          >
            Change Text 2
          </button>
          <button
            className="--btn --btn-primary --btn-lg"
            onClick={handleClick3}
          >
            Change Text 3
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseState;
