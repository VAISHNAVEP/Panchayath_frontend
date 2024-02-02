import React, { useEffect, useState } from "react";
import { ComplaintData } from '../../../Service/AdminApi';

const ComplaintView = () => {
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
                <td>{user.aadharNumber}</td> 
                <td>{user.email}</td> 
                <td>{user.phonenumber}</td> 
                <td>{user.complaint}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}

export default ComplaintView;