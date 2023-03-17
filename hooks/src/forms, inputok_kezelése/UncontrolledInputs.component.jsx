import React, { useRef, useEffect, useState } from "react";

//Target DOM  nodes/elements
//Preserve values during re-render

//useRef-en keresztül kerül az input tárolásra a nameInputref változóba
const UncontrolledInputs = () => {
  const nameInputref = useRef(null);
  const jobInputRef = useRef(null);

  const [nameOutRef, setnameOutRef] = useState("");
  const [jobOutRef, setjobOutRef] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setnameOutRef(nameInputref.current.value);
    setjobOutRef(jobInputRef.current.value);

    nameInputref.current.value = "";
    jobInputRef.current.value = "";
  };

  /*az oldal betöltésekor a fókusz a név mezőre kerül, itt villog a kurzor*/
  useEffect(() => {
    nameInputref.current.focus();
  }, []);

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Uncontrolled Inputs</h1>

      <div className="--flex-column">
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
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={nameOutRef} readOnly />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input type="text" name="job" value={jobOutRef} readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledInputs;
