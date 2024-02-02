import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../Login/AdminLogin";
import AdminHome from "../Home/AdminHome";
import UserData from "../UserData/UserData";
import Certificate from "../Certificate/Certificate";
import Project from "../Project/Project";
import Billing from "../Billing/Billing";
import UserCertificates from "../Certificate/UserCertificates/UserCertificates";
import ComplaintHome from "../Complaint/ComplaintHome/ComplaintHome";
import ComplaintView from "../Complaint/ComplaintView/ComplaintView";
import ViewCertificates from "../Certificate/UserCertificates/ViewCertificates/ViewCertificates";
import CertificateHeading from "../Certificate/CertificateHeading/CertificateHeading";
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/adminproject" element={<Project />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/usercertificates" element={<UserCertificates />} />
        <Route path="/complainthome" element={<ComplaintHome />} />
        <Route path="/complaintview" element={<ComplaintView />} />
        <Route path="/viewcertificates" element={<ViewCertificates />} />
        <Route path="/certificateheading" element={<CertificateHeading />} />
      </Routes>     
    </div>      
  );
};

export default AdminRoutes;
