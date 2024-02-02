import React,{ useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetDeathCertificate } from '../../../../Service/UserApi';
import Header from '../../../Header/Header';

const DeathCertificateHome = () => {
  const [DeathCertificateInfo, setDeathCertificateInfo] = useState(null);

  useEffect(() => {
    GetDeathCertificate()
    .then((res) => setDeathCertificateInfo(res.data))
    .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />
       
       <h1>Death Certificate Information</h1>
      {DeathCertificateInfo ? (
        <div>
          <p>Certificate Name: {DeathCertificateInfo.certificatename}</p>
          <p>Requirements: {DeathCertificateInfo.requirements}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button as={Link} to="/deathcertificateform">ApplyNow</Button>
    </div>
  )
}

export default DeathCertificateHome;