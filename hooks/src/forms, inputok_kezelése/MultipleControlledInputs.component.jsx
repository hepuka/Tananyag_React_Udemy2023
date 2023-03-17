import React, { useState } from "react";

/*
- több state van egy state-be helyezve
- a statenév.proprty-vel tudom elélrni a state adatait*/

const MultipleControlledInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    company: "",
  });

  //itt állítom be a state változóit az
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = person;
    console.log(newUser);
    setPerson({ name: "", job: "", company: "" });
  };

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Multiple Controlled Inputs</h1>

      <div className="--flex-column">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job">Job: </label>
              <input
                type="text"
                name="job"
                value={person.job}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                name="company"
                value={person.company}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="--btn --btn-block">
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultipleControlledInputs;
