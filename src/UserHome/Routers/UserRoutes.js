import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import ComplaintRegister from "../ComplaintRegister/ComplaintRegister";
import Projects from "../Projects/Projects";
import HarithaKeralam from "../Projects/HarithaKeralam";
import ImpactKerala from "../Projects/ImpactKerala";
import VathilPadisevanam from "../Projects/VathilPadisevanam";
import KeralaSolid from "../Projects/KeralaSolid";
import Map from "../Map/Map";
import Certificates from "../Certificates/Certificates";
import BirthCertificateHome from "../Certificates/BirthCertificate/BirthCertificateHome/BirthCertificateHome";
import BirthCertificateForm from "../Certificates/BirthCertificate/BirthCertificateForm/BirthCertificateForm";
import DeathCertificateHome from "../Certificates/DeathCertificate/DeathCertificateHome/DeathCertificateHome";
import DeathCertificateForm from "../Certificates/DeathCertificate/DeathCertificateForm/DeathCertificateForm";
import MarriageCertificateHome from "../Certificates/MarriageCertificate/MarriageCertificateHome/MarriageCertificateHome";
import MarriageCertificateForm from "../Certificates/MarriageCertificate/MarriageCertificateForm/MarriageCertificateForm";
import BillHome from "../Bills/BillHome/BillHome";
import ElectricityBillForm from "../Bills/ElectricityBill/ElectricityBillForm";
import WaterBillForm from "../Bills/WaterBill/WaterBillForm";
import PropertTaxForm from "../Bills/PropertyTax/PropertTaxForm";
import Header from "../Header/Header";
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/complaintregister" element={<ComplaintRegister />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/harithakeralam" element={<HarithaKeralam />} />
        <Route path="/impactkerala" element={<ImpactKerala />} />
        <Route path="/vathilpadisevanam" element={<VathilPadisevanam />} />
        <Route path="/keralasolid" element={<KeralaSolid />} />
        <Route path="/map" element={<Map />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/birthcertificatehome" element={<BirthCertificateHome />} />
        <Route path="/birthcertificateform" element={<BirthCertificateForm />} />
        <Route path="/deathcertificatehome" element={<DeathCertificateHome />} />
        <Route path="/deathcertificateform" element={<DeathCertificateForm />} />
        <Route path="/marriagecertificatehome" element={<MarriageCertificateHome />} />
        <Route path="/marriagecertificateform" element={<MarriageCertificateForm />} />
        <Route path="/billhome" element={<BillHome />} />
        <Route path="/electricitybill" element={<ElectricityBillForm />} />
        <Route path="/waterbill" element={<WaterBillForm />} />
        <Route path="/propertytax" element={<PropertTaxForm />} />
      </Routes>
    </>
  );
};

export default UserRoutes;

