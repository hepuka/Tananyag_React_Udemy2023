import React, { useState } from "react";
import { people_data_array } from "../people-data-array.js";

const UseStateObject = () => {
  /*   const [profile, setProfile] = useState({
    name: "John Doe",
    job: "Web dev",
    company: "Google",
  }); */

  const [profile, setProfile] = useState(people_data_array);

  const updateCompany = () => {
    /* itt kapja meg az objektumot és megadjuk, hogy mire változtassa annak company értékét */
    setProfile({ ...profile, company: "Microsoft" });
  };

  return (
    <>
      <div>
        <h2 className="--text-center --my2">useState in Object</h2>

        <div className="--card --mx2">
          {/*itt nem kell map-elni, mivel az objektum nem egy tömbben van, hanem ez
          csak egy egyerűtömb, nincs semmibe ágyatva */}
          <h2>Name: {profile.name}</h2>
          <h4>Job: {profile.job}</h4>
          <h4>Company: {profile.company}</h4>
        </div>
      </div>
      <div className="--center-all --my2">
        <button className="--btn --btn-primary" onClick={updateCompany}>
          Change Company
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
