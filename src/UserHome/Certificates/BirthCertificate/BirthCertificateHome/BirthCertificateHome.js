import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { GetBirthCertificate } from "../../../../Service/UserApi";
import Header from "../../../Header/Header";
import './BirthCertificateHome.css';
const BirthCertificateHome = () => {
  const [birthCertificateInfo, setBirthCertificateInfo] = useState(null);

  useEffect(() => {
    GetBirthCertificate()
    .then((res) => setBirthCertificateInfo(res.data))
    .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />
  
      <h1>Birth Certificate Information</h1>
      {birthCertificateInfo ? (
        <div>
          <h3>Certificate Name: {birthCertificateInfo.certificatename}</h3>
          <h3>Requirements:<p>{birthCertificateInfo.requirements}</p></h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button as={Link} to="/birthcertificateform">
        ApplyNow
      </Button>
    </div>
  );
};

export default BirthCertificateHome;
