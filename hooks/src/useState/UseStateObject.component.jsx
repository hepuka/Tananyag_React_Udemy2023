import React, { useState } from "react";
import { people_data_object } from "../people-data-object.js";

const UseStateObject = () => {
  //ha nem egy külső fájból veszem az adatot, így adom meg a kezdő objektumot

  /*   const [profile, setProfile] = useState({
    name: "John Doe",
    job: "Web dev",
    company: "Google",
  }); */

  const [profile, setProfile] = useState(people_data_object);

  const updateCompany = () => {
    /* itt kapja meg az objektumot és megadjuk, hogy mire változtassa annak company értékét 
    
    elsőnek spread-el megadom a teljes objektumot, majd utána megadom, hogy a company értéke mire változzon. Csak ezt az egy property-t akarom megváltoztatni
    */

    setProfile({ ...profile, company: "Microsoft" });
  };

  return (
    <>
      <div>
        <h2 className="--text-center --my2">useState in Object</h2>

        <div className="--card --mx2">
          {/*itt nem kell map-elni, mivel ez egy egyszerű objekum, nincs tömbe rakva */}
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
