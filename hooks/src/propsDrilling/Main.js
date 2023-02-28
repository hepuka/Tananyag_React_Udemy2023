import React, { useState } from "react";
import UserList from "./UserList";
import { userData } from "./data";
import UserContext from "./userContext";

//1. Create the context in a seperate file (context_API folder)
//2. Provide the context to the component
//3.Use the context

function Main() {
  const [users, setusers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div className="--flex-center ">
        <div className="--width-500px --my">
          <h2>Props Drilling</h2>
          <UserList />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Main;
