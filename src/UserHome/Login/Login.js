import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { UserLogin } from "../../Service/UserApi";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../Redux/userSlice";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await UserLogin(formData);
      if (response.user) {
        toast.success("Login Successfull", {
          position: "top-center",
        });
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
        localStorage.setItem("token", response.token);

        navigate("/home");
        dispatch(setUserDetails(response.user));
      } else {
        toast.error("invalid email or password", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed", {
        position: "top-center",
      });
    }
  };

  return (
    <Container className="container">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow ml-500px" id="frm">
            <h2 className="text-center mb-4">Log In</h2>
            <Form.Group className="email" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="password" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="btn" variant="primary" type="submit" block>
              Login
            </Button>
            <div className="register-link">
              <p>Create new account</p>
              <Link to="/register" className="link">
                Register
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
