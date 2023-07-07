import React, { useEffect, useState } from "react";

/*
- több state van egy state-be helyezve
- a statenév.proprty-vel tudom elélrni a state adatait*/

/*
1.initial usestate objektum, a bejövő inputokból objektum készítése
2. tömb usestate a végleges tömbnek ami tartalmazza az objektumokat
3. handlechange - az inputok name és value argumetumainak az értékének destruktúrálása
4.az obejktum usestate setjének a beállítása - spread operátorral, hozzáaadjuk az inputokat, majd a name-value párosból elkészítjük az új objektumot
5. handlesubmit függvénnyel az objektum usestate értékét berakjuk a tömb usestatebe - spread operátor előző objektumok majd az új objektum hozzáadása
*/

const MultipleControlledInputs = () => {
  const initial = {
    name: "",
    job: "",
    company: "",
    address: "",
    phone: "",
    email: "",
  };
  const [person, setPerson] = useState(initial);
  const [final, setFinal] = useState([]);

  //itt állítom be a state változóit az
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinal((item) => [...item, person]);
  };

  console.log(final);

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Multiple Controlled Inputs</h1>

      <div className="--flex-column">
        <div className="--card --bg-light --width-500px --flex-center">
          <form className="--form-control" onSubmit={handleSubmit}>
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
            <div>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                name="address"
                value={person.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input
                type="number"
                name="phone"
                value={person.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                value={person.email}
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
