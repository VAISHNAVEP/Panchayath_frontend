import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const BillHome = () => {
  return (
    <div>
      <Header />
    <Link to="/propertytax">Property Tax</Link><br></br>
    <Link to="/waterbill">Water Bill</Link><br></br>
    <Link to="/electricitybill">Electricity Bill</Link><br></br>
    </div>
  )
}
export default BillHome;