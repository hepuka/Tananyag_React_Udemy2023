import React, { useState } from "react";
import { profileData } from "../../profile-data.js";
import { FaTrashAlt } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  console.log(userProfile);

  const removeProfile = (id) => {
    const newUserProfile = userProfile.filter((item) => item.id !== id);

    setUserProfile(newUserProfile);
  };

  return (
    <section className="profile-sec --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className="--text-light">User Profile App</h2>

        {userProfile.map((item) => {
          const { id, img, name, job } = item;
          return (
            <div className="profile --card --flex-between --p" key={id}>
              <img src={img} alt="Profile" />

              <div className="desc">
                <h4 className="--text-light">Name: {name}</h4>
                <p className="--text-light">Jop: {job}</p>
              </div>
              <FaTrashAlt
                size={18}
                className="icon"
                onClick={() => removeProfile(id)}
              />
            </div>
          );
        })}

        <button
          className="--btn --btn-danger"
          onClick={() => setUserProfile([])}
        >
          Clear All
        </button>
      </div>
    </section>
  );
};

export default Profile;
