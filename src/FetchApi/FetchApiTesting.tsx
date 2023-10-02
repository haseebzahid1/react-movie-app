import React, { useEffect, useState } from "react";
import apiClients, { CanceledError } from "../services/api-clients";
import userService, { User } from "../services/userService";

// interface User { cut
//   id: number;
//   name: string;
// }
const FetchApiTesting = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    // const controller = new AbortController(); cut
    setLoading(true);
    // apiClients.get<User[]>("/users", {
    //     signal: controller.signal,
    //   })
    //   .then((res) => {
    //     setUsers(res.data);
    //     setLoading(false);
    // })
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  const deleteUser = (user: User) => {
    const originUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    // apiClients.delete('users/' + user.id) cut
    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originUsers);
    });
  };

  const addUser = () => {
    const originUsers = [...users];
    const newUser = { id: 0, name: "Haseeb" };
    setUsers([newUser, ...users]);

    // apiClients
    //   .post("/users", newUser) cut
    userService
      .createUser(newUser)
      .then(({ data: saveUser }) => setUsers([saveUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originUsers);
      });
    // .then(res => setUsers([res.data, ...users]))
  };
  const updateUser = (user: User) => {
    const originUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originUsers);
    });
  };

  return (
    <div>
      {isloading && <div className="spinner-border">{error}</div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group ">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiTesting;

// Feching data lecture no 66
// Handling Errors lecture no 68
// cancelling a fetch request lecture no 70
// showing a loading indicator lecture no 71
// Deleting Data lecture no 72
// creating data lecture no 73
// updating data lecture no 74
// Extracting a reusable api client lecture no 75
