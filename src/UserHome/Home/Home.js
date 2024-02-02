import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../Home/home.css";
import { selectUserDetails } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";

const Home = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId); 

  useEffect(() => {
    if (userId) {
      console.log("User ID in Redux:", userId);
    }
  }, [userId]);
  const admintoken = localStorage.getItem("admintoken");
  
  

  return (
    <div>
      <Header />
    
    </div>
  );
};

export default Home;
