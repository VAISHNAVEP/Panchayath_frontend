import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Certificates = () => {
  return (
    <div>
      <Header />
        <h1>Certificates</h1>
        <Link to="/birthcertificatehome">BirthCertificate</Link><br></br>
        <Link to="/deathcertificatehome">DeathCertificate</Link><br></br>
        <Link to="/marriagecertificatehome">MarriageCertificate</Link><br></br>
        
    </div>

  )
}

export default Certificates;