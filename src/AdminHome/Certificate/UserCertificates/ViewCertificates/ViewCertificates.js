import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetBirthCertificateDetails } from "../../../../Service/AdminApi";


const ViewCertificates = () => {
  const [BirthCertificateUser, setBirthCertificateUser] = useState([]);

  //get user data//
  useEffect(() => {
    GetBirthCertificateDetails()
      .then((res) => {
        setBirthCertificateUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("front error", err));
  }, []);
  

  return (
    <div className="d-flex vh-100  justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Certificate Name</th>   
            </tr>                                                       
          </thead>
          <tbody>
            {BirthCertificateUser.map((user) => (
              <tr key={user._id}>
                <td>{user.childname}</td>
              </tr>
            ))}
          </tbody>
          <Link to="/admin/viewcertificates">View Certificates</Link>
        </table>
      </div>
    </div>
  );
};

export default ViewCertificates;
