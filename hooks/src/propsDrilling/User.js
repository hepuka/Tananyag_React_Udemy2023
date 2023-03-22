import React, { useContext } from "react";
import UserContext from "./userContext";

const User = ({ id, name }) => {
  //így is fogadható az átadott adat
  //const data = useContext(UserContext);

  const { deleteUser } = useContext(UserContext);

  return (
    <div className="--flex-between">
      <h3 className="--text-light">{name}</h3>
      <button className="--btn --btn-danger" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
