import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setIsError("");
      })
      .catch((err) => {
        setIsError(err.message);
        setUsers([]);
      })
      .finally(() => setIsLoading(false));
  }, []);
  function getshortvalue(value, id) {
    if (value.length > 20) {
      return (
        <div>
          {value.substr(0, 20)}...
          <Link to={`/users/${id}`}> More...</Link>
        </div>
      )
    }
  }
  return (
    <div className={classes.container}>
      {users.length &&
        users.map((user) => (
          <div className={classes.mod}>
            <div className={classes.posts} key={user.id}>
              <h1>{user.id} </h1>
              <div className={classes.flexing}>
                <h3>
                  {user.name} {user.email}{" "}
                </h3>
                <button onClick={() => navigate(`/users/${user.id}`)}>
                  Learn More
                </button>
              </div>
              <br />
              <p>catchPhrase:{getshortvalue(user.company.catchPhrase, user.id)}</p>
            </div>
          </div>
        ))}
      {isLoading && "loading..."}
      {error && error}
    </div>
  );
};

export default Users;