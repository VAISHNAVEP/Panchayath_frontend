import React from "react";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BirthCertificate } from "../../../../Service/UserApi";
import { selectUserDetails } from "../../../../Redux/userSlice";
import Header from "../../../Header/Header";
import './BirthCertificateForm.css';
const BirthCertificateForm = () => {
  const { userDetails} = useSelector((state) => ({
    userDetails: state.user.userDetails,
  }));
  
  

  const initialValues = {
    childname: "",
    nameofmother: "",
    nameoffather: "",
    aadhar: "",
    gender: "",
    address: "",
    dateofbirth: "",
    placeofbirth: "",
    
  };

  

  const validationSchema = Yup.object({
    childname: Yup.string()
      .required("* This field is required")
      .min(3, "Must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "numbers are not allowed"),

    nameofmother: Yup.string()
      .required("* This field is required")
      .min(3, "Must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "numbers are not allowed"),

    nameoffather: Yup.string()
      .required("* This field is required")
      .min(3, "Must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "numbers are not allowed"),

    aadhar: Yup.string()
      .required("* This field is required")
      .matches(/^\d{12}$/, "Must be 12 digits")
      .matches(/^\S*$/, "No white spaces allowed"),

    gender: Yup.string().required("* This field is required"),

    address: Yup.string().required("* This field is required"),

    dateofbirth: Yup.string().required("* This field is required"),

    placeofbirth: Yup.string().required("* This field is required"),
  });

  const onSubmit = async (values) => {
    
    try {
      const response = await BirthCertificate(values,userDetails);

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container>
      <Header />
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          <Form
            className="p-4 border rounded shadow "
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <h2 className="text-center mb-4">Birth Certificate</h2>

            <Form.Group controlId="formComplaintName">
              <Form.Label>Name Of Child</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="childname"
                value={formik.values.childname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.childname && formik.errors.childname ? (
                <p>{formik.errors.childname}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formComplaintEmail">
              <Form.Label>NameOfFather</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fathername"
                name="nameoffather"
                value={formik.values.nameoffather}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nameoffather && formik.errors.nameoffather ? (
                <p>{formik.errors.nameoffather}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formComplaintPhoneNumber">
              <Form.Label>NameOfMother</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter MotherName"
                name="nameofmother"
                value={formik.values.nameofmother}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nameofmother && formik.errors.nameofmother ? (
                <p>{formik.errors.nameofmother}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formComplaintPhoneNumber">
              <Form.Label>AadharNo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your AadharNumber"
                name="aadhar"
                value={formik.values.aadhar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.aadhar && formik.errors.aadhar ? (
                <p>{formik.errors.aadhar}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formComplaintGender">
              <Form.Label>Gender</Form.Label>
              <div>
                
                <FormCheck
                  inline
                  type="radio"
                  label="Male"
                  id="genderMale"
                  name="gender"
                  value="male"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormCheck
                  inline
                  type="radio"
                  label="Female"
                  id="genderFemale"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <p>{formik.errors.gender}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formComplaintAadharNumber">
              <Form.Label>Permanant Address</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter your Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? (
                <p>{formik.errors.address}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formComplaintDescription">
              <Form.Label>DateOfBirth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your DOB"
                name="dateofbirth"
                value={formik.values.dateofbirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
                <p>{formik.errors.dateofbirth}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formComplaintDescription">
              <Form.Label>PlaceOfBirth</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PlaceofBirth"
                name="placeofbirth"
                value={formik.values.placeofbirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.placeofbirth && formik.errors.placeofbirth ? (
                <p>{formik.errors.placeofbirth}</p>
              ) : null}
            </Form.Group>

            <Button variant="primary" type="submit" className="birthbtn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BirthCertificateForm;
