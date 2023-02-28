import React, { useContext } from "react";
import User from "./User";
import UserContext from "./userContext";

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      {users.map((item) => {
        return (
          <div className="--card --p --my2 --bg-primary" key={item.id}>
            {/* a teljes item-et átadom, mert minden kell belőle (id,name, stb) */}
            <User {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
