import React, { useState } from "react";
import { peopleData } from "../people-data.js";
import { BiTrash } from "react-icons/bi";

const useStateArray = () => {
  const [people, setPeople] = useState(peopleData);

  console.log(people); //itt már megkapom a kezdeti állapotot

  const removePerson = (id) => {
    /* úgy töröl, hogy a filter metódussal kiválasztjuk azokat az elemeket amelyeknek az id-a nem egyezik meg a kapott id-val, és ezt a visszakapott tömböt adjuk át a setPeople-nek */

    const selectedPeople = people.filter((item) => item.id !== id);

    setPeople(selectedPeople);
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container">
        <h1 className="--color-white">UseState in Array</h1>

        {people.map((item) => {
          const { id, name } = item;
          return (
            <div key={id} className="--flex-between --bg-light --my --card">
              <h2 className="--p">{name}</h2>
              <BiTrash color="red" size={22} onClick={() => removePerson(id)} />
            </div>
          );
        })}

        {/* itt teszi üressé, töröl */}
        <button className="--btn --btn-danger" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </section>
  );
};

export default useStateArray;
