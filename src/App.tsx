import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import UserCard from "./UserCard";
import { addUser } from "./features/Users";

function App() {
  const userList = useSelector((state: RootState) => state.users.value); // users is the slice name + value (see initial state;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  console.log(userList);
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="name..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="username..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
            setName('');
            setUsername('')
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUser">
        {userList.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
