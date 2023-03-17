import React, { useRef, useEffect } from "react";

//Target DOM  nodes/elements
//Preserve values during re-render

//useRef-en keresztül kerül az input megadásra
const UncontrolledInputs = () => {
  const nameInputref = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputref.current.value;
    const enteredJob = jobInputRef.current.value;

    console.log(enteredName, enteredJob);
  };

  /*az oldal betöltésekor a fókusz a név mezőre kerül elhelyezésre, itt villog majd a kurzor*/
  useEffect(() => {
    nameInputref.current.focus();
  }, []);

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Uncontrolled Inputs</h1>

      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" ref={nameInputref} />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input type="text" name="job" ref={jobInputRef} />
            </div>
            <button
              type="submit"
              className="--btn --btn-block"
              onClick={handleSubmit}
            >
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledInputs;
