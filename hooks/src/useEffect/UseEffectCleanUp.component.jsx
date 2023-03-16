import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  /*mivel nincs megadva semmi 2. paraméternek mindenegyes rendereléskor lefut. Most a renderelést az ablak méretének változása jelenti.
  
  A useEffectben a window objektumra megvan adva egy eseménykezelő ami a updateWidth függvényen keresztül beállítja a useState with értékét a window.innerWidth-el.
  

  */

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    //clean up
    //minden esetben törölni kell, ez a rlsz szükséges
    //a geteventListeners(window) resize értékét töröljük vele. ne legyen a böngészőben hatalmas mennyiségű esemény logolva. Ezután mindenegyes eseménykezeléskor, ablakméret változásnál 1 lesz az elemszám

    //ez a cleanup függvény lényegében
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [width]);

  return (
    <div className="--center-all">
      <h1>Screen Width</h1>
      <h2>{width}px</h2>
    </div>
  );
};

export default UseEffectCleanUp;
