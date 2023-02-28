import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const GitHubUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //itt a fetch nem a .then() -el történik, hanem az async-await -el
  const getUsers = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const respons = await fetch(url);
      console.log(respons);

      if (!respons.ok) {
        throw new Error("Something wenr frong!");
      }

      const data = await respons.json();
      console.log(data);

      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setError(true);
      setIsLoading(false);
    }
  };

  // üres [] szükséges, hogy csak egyszer fusson le az oldal betöltődésekor csak
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="--bg-primary --py2">
      <div className="container">
        <header>
          <h1 className="--text-center --text-light">GitHub Users</h1>
          <div className="--line"></div>
        </header>

        {isLoading && (
          <div className="--center-all --p">
            <h4 className="--text-light">Loading...</h4>
          </div>
        )}

        <div className="--grid-25 --py">
          {error ? (
            <h4 className="--text-light --text-center --my2">
              Something went wrong!
            </h4>
          ) : (
            users.map((item) => {
              // destruktúrálással kiszedem a users-ből propery-ket ami kell
              const { id, login, avatar_url, html_url } = item;

              return (
                <div key={id} className="--card --bg-light --p --flex-start">
                  <img
                    src={avatar_url}
                    alt="image"
                    className="--profile-img --mx"
                  />
                  <span>
                    <h4>{login}</h4>
                    <a href={html_url}>View Profile</a>
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubUsers;
