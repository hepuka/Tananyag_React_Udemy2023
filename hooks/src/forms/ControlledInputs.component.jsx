import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const [rename, setRename] = useState("");
  const [rejob, setRejob] = useState("");

  const handleSubmit = (e) => {
    //fontos a preventálás mert a submit gomb elküldése után újratöltődik az oldal
    //ezzel azt érjük el, hogy nem töltődik újra
    e.preventDefault();

    console.log(name, job);

    setName("");
    setJob("");
    setRename(name);
    setRejob(job);
  };

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Controlled Inputs</h1>

      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input
                type="text"
                name="job"
                value={job}
                onChange={(e) => {
                  setJob(e.target.value);
                }}
              />
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

        {/*---------------- mezők ahová elküldjük az aadatokat ---------------*/}
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="rename" value={rename} readOnly />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input type="text" name="rejob" value={rejob} readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlledInputs;
