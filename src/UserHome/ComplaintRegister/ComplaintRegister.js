import React, { useState } from "react";
import { Complaint } from "../../Service/UserApi";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

const ComplaintRegister = () => {
  const { userDetails} = useSelector((state) => ({
    userDetails: state.user.userDetails,
  }));
  
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [complaint, setComplaint] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (  !userDetails || !userDetails._id ||!file || !name || !aadharNumber || !email || !phonenumber || !complaint) {
      setError("All fields are required");
      return false;
    }

    // File validation
    const allowedFileTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"];
    if (!allowedFileTypes.includes(file.type)) {
      setError("Invalid file format. Please upload a valid SVG, PNG, JPG, or JPEG file.");
      return false;
    }

    // Name validation
    if (name.length < 3 || /\d/.test(name)) {
      setError("Name must be at least 3 characters and should not contain numbers.");
      return false;
    }

    // Aadhar Number validation
    if (!/^\d{12}$/.test(aadharNumber)) {
      setError("Invalid Aadhar Number. It must be 12 digits.");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return false;
    }

    // Phone Number validation
    if (!/^\d{10}$/.test(phonenumber)) {
      setError("Invalid Phone Number. It must be 10 digits.");
      return false;
    }

    setError(null);
    return true;
  };
           
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("aadharNumber", aadharNumber);
    formData.append("email", email);
    formData.append("phonenumber", phonenumber);
    formData.append("complaint", complaint);
    formData.append("userId", userDetails._id.toString());

    try {
      await Complaint(formData, userDetails._id);
  
      toast.success('Complaint registration successful', {
        position: 'top-center',
      });
    } catch (err) {
      toast.error('Complaint registration failed', {
        position: 'top-center',
      });
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <Header />
      <form encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input type="file" className="form-control" id="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aadharNumber" className="form-label">Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            id="aadharNumber"
            placeholder="Aadhar Number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="complaint" className="form-label">Complaint</label>
          <input
            type="text"
            className="form-control"
            id="complaint"
            placeholder="Complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpload}>Submit</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default ComplaintRegister;         
