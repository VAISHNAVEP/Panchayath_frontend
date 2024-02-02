import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetMarriageCertificate } from "../../../../Service/UserApi";
import Header from "../../../Header/Header";
import './MarriageCertificateHome.css';
const MarriageCertificateHome = () => {
  const [MarriageCertificateInfo, setMarriageCertificateInfo] = useState(null);

  useEffect(() => {
    GetMarriageCertificate()
      .then((res) => setMarriageCertificateInfo(res.data))
      .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />

      
      {MarriageCertificateInfo ? (
        <div>
          <p>Certificate Name: {MarriageCertificateInfo.certificatename}</p>
          <p>Requirements: {MarriageCertificateInfo.requirements}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button as={Link} to="/marriagecertificateform">
        ApplyNow
      </Button>
    </div>
  );
};

export default MarriageCertificateHome;
