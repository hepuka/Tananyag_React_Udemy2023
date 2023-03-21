import useFetch from "./useFetch.component";

const url = "https://api.github.com/users";

const GitHubUsers = () => {
  const { data, error, isLoading } = useFetch(url);

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
            data.map((item) => {
              // destruktúrálással kiszedem a item-ből propery-ket ami kell
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
