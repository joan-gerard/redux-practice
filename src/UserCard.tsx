import React from "react";
import "./UserCard.css";
import { UserType } from "./interface";
import { deleteUser } from "./features/Users";
import { useDispatch } from "react-redux";


type Props = {
  user: UserType;
};

const UserCard: React.FC<Props> = ({ user }) => {

    const dispatch = useDispatch();

  return (
    <div className="userCard">
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <div className="update-div">
        <input type="text" placeholder="new username..." onChange={() => {}} />
        <button>Update</button>
      </div>
      <button className="delete-btn" onClick={() => {
          dispatch(
              deleteUser({
                  id: user.id,
                  name: user.name,
                  username: user.username
              })
          )
      }}>Delete user</button>
    </div>
  );
};

export default UserCard;
