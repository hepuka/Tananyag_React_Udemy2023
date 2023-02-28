import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    //clean up
    //minden esetben törölni kell, ez a rlsz szükséges
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <div className="--center-all">
      <h1>Screen Width</h1>
      <h2>{width}px</h2>
    </div>
  );
};

export default UseEffectCleanUp;
