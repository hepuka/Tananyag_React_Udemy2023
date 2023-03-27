import React, { useEffect, useRef, useState } from "react";

const RefTutorial = () => {
  let inputRef = useRef(null);
  const [data, setData] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  });

  const onClick = () => {
    // console.log(inputRef.current.value);
    setData(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>useRefTutiorial</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change name</button>
      <h4>{data}</h4>
    </div>
  );
};

export default RefTutorial;
