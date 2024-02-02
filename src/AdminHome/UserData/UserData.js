import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUser } from "../../Service/AdminApi";
import './UserData.css';
const User = () => {
  const [users, setUsers] = useState([]);
  const handleBlockUser = (userId) => {
    const config = {
      headers: {
        // "Content-Type": "application/json",
      },
    };

    axios
      .put(`http://localhost:3002/blockUser/${userId}`, null, config)
      .then((res) => {
        console.log(res);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, blocked: true } : user
          )
        );
      })
      .catch((err) => console.log(err));
  };

  //get user data//
  useEffect(() => {
    GetUser()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("front error", err));
  }, []);

  return (
    <div className="d-flex vh-100  justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>
                  {!user.blocked && (
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleBlockUser(user._id)}
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
