import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from "react-toastify";
import { UserSignup } from "../../Service/UserApi";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (!/^[A-Za-z]+$/.test(username)) {
      errors.username = "Username must only contain characters";
    } else if (/\s/.test(username.trim())) {
      errors.username = "Username must not contain white space";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    } else if (!email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      errors.email = "Invalid email address";
    } else if (!phonenumber.trim()) {
      errors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phonenumber)) {
      errors.phonenumber = "Invalid phone number (must be 10 digits)";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/.test(
        password
      )
    ) {
      errors.password =
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, phonenumber, password);
  
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
      const { data } = await UserSignup({
        username,
        email,
        phonenumber,
        password,
      });
    
      // Handle success, e.g., show success message, redirect, etc.
    } catch (err) {
      console.log(err);
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
      });
    }
  };
  

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <h2 className="text-center mb-4">Sign Up</h2>

            <Form.Group controlId="formFirstName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!errors.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your PhoneNumber"
                name="phonenumber"
                onChange={(e) => setPhonenumber(e.target.value)}
                isInvalid={!!errors.phonenumber}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.phonenumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                name="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={!!errors.confirmPassword}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
            <ToastContainer ></ToastContainer>

            <p className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;