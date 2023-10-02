import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const FetchApiTesting = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
    })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        
      })
   
    return () => controller.abort();
  }, []);
  const deleteUser = (user: User) => {  
    const originUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id));
    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
    .catch(err => {
        setError(err.message);
        setUsers(originUsers);
    })

  }

  return (
    <div>
        {isloading && <div className="spinner-border">{error}</div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group ">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button> 
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
