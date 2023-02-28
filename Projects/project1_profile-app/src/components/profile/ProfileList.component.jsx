import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "./Profile.component";
import { profiles } from "../../profile-data";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
          {profiles.map((items) => {
            // használhatunk destuktúrálást is, hogy ne kelljen sokszor az item.valami leírni
            const { id, img, name, job, company, link } = items;

            return (
              <Profile
                key={id}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
