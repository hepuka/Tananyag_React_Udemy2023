import React, { useState } from "react";

/*input értékek olvasása és beállítása a state-eken keresztül történik

input mezőből egy onChange metóduson keresztül a komponens state-jét beállítjuk az e.target.value-al;  setName(e.target.value);

ugyanennek az imnput mezőnek a value értékének megadjuk a state változót, ami az előző onhange-el beállítottink; value={name}

a handleSubmit mezódust beállítjuk a form Submit gombjára. A függvény az e.preventDefault(); beállítása után az input mezőt tartalmát kitörlni és a tartalmat beállítja a fogadó mező state-jébe; setRename(name);
*/
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const [rename, setRename] = useState("");
  const [rejob, setRejob] = useState("");

  const handleSubmit = (e) => {
    //fontos a preventálás mert a submit gomb elküldése után újratöltődik az oldal
    //ezzel azt érjük el, hogy nem töltődik újra

    e.preventDefault();
    setName("");
    setJob("");
    setRename(name);
    setRejob(job);
  };

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Controlled Inputs</h1>

      <div className="--flex-column --mx3">
        <div className="--card --bg-light --width-500px --flex-center --mb2">
          <form onSubmit={handleSubmit} className="--form-control">
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
            <button type="submit" className="--btn --btn-block">
              Submit User
            </button>
          </form>
        </div>

        {/*---------------- mezők ahová elküldjük az adatokat ---------------*/}
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
