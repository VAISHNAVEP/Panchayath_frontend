import React, { useEffect, useState } from "react";
import { ComplaintData } from '../../../Service/AdminApi';
import { Link } from "react-router-dom";

const ComplaintHome = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    ComplaintData()
    .then((res) => {
      setUsers(res.data);
      console.log(res.data);
    })    
      .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
       <table>
          <thead>
            <tr>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td> 
              </tr>
            ))}
          </tbody>
          <Link to="/admin/complaintview">View Complaint</Link>
        </table>
      
    </div>
  )
}

export default ComplaintHome;
