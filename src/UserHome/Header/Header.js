import React, { useEffect,useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { getUserInfo } from "../../Service/UserApi";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../Redux/userSlice";
const Header = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    getUserInfo()
    .then((res)=>{console.log(res)
    dispatch(setUserDetails(res.user))
  })
    .catch((err)=>console.log(err))
  }, []);

  return (
    <Container fluid>
      <div className=" align-items-center" id="header">
        <img src={require("../static/Images/logo.png")} alt="Logo" />
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand as={Link} to="/home" className="home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/complaintregister" className="complaint">ComplaintRegister</Link>
              <Nav.Link as={Link} to="/certificates">
                Certificates
              </Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/harithakeralam">
                  HarithaKeralam
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/impactkerala">
                  Impact Kerala
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vathilpadisevanam">
                  VathilppadiSevanam
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/keralasolid">
                  Kerala Solid Waste Management Project
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/billhome">
                Bill Payment
              </Nav.Link>
              <Nav.Link as={Link} to="/map">
                Location
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
