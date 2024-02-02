import axios from "axios";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./adminhome.css";

const AdminHome = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/adminhome")
      .then((result) => {
        console.log(result);
        if (result.data !== "success") {
          // Navigate('/login')
        }
      })
      .catch((err) => console.log(err));
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="sidebar">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Item>
              <Link to="/admin/complainthome" className="nav-link">
                Complaint Management
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/certificate" className="nav-link">
                Certificate Management
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/billing" className="nav-link">
                Billing Management
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/userdata" className="nav-link">
                User Management
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/adminproject" className="nav-link">
                Project Management
              </Link>
            </Nav.Item>
            {/* Add more navigation links as needed */}
          </Nav>
        </Col>

        {/* Main content */}
       
      </Row>
    </Container>
  );
};

export default AdminHome;
