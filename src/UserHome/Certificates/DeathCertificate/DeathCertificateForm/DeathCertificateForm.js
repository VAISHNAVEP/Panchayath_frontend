import React from "react";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { DeathCertificate } from "../../../../Service/UserApi";
import Header from "../../../Header/Header";
import './DeathCertificateForm.css';
const DeathCertificateForm = () => {
  const { userDetails} = useSelector((state) => ({
    userDetails: state.user.userDetails,
  }));
  
  const initialValues = {
    nameofdeceased: "",
    nameofmother: "",
    nameoffather: "",
    aadhar: "",
    address: "",
    gender: "",
    dateofdeath: "",
    placeofdeath: "",
  };

  const validationSchema = Yup.object({
    nameofdeceased: Yup.string()
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

    address: Yup.string().required("* This field is required"),

    gender: Yup.string().required("* This field is required"),

    dateofdeath: Yup.string().required("* This field is required"),

    placeofdeath: Yup.string().required("* This field is required"),

    aadhar: Yup.string()
      .required("* This field is required")
      .matches(/^\d{12}$/, "Must be 12 digits"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await DeathCertificate(values,userDetails);
      console.log(response.data);
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
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Form
            className="p-4 border rounded shadow"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <h2 className="text-center mb-4">Death Certificate</h2>

            <Form.Group controlId="formComplaintName">
              <Form.Label>Name Of Deceased</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="nameofdeceased"
                value={formik.values.nameofdeceased}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nameofdeceased && formik.errors.nameofdeceased ? (
                <p>{formik.errors.nameofdeceased}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formComplaintEmail">
              <Form.Label>NameOfFather</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NameofFather"
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
                placeholder="Enter NameofMother"
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

            <Form.Group controlId="formComplaintAadharNumber">
              <Form.Label>Present Address</Form.Label>
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
            <Form.Group controlId="formComplaintGender">
              <Form.Label>Gender</Form.Label>
              <div>
                {/* Use Form.Check for radio buttons */}
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

            <Form.Group controlId="formComplaintDescription">
              <Form.Label>DateOfDeath</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your DOB"
                name="dateofdeath"
                value={formik.values.dateofdeath}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.dateofdeath && formik.errors.dateofdeath ? (
                <p>{formik.errors.dateofdeath}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formComplaintDescription">
              <Form.Label>PlaceOfDeath</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PlaceofDeath"
                name="placeofdeath"
                value={formik.values.placeofdeath}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.placeofdeath && formik.errors.placeofdeath ? (
                <p>{formik.errors.placeofdeath}</p>
              ) : null}
            </Form.Group>

            <Button variant="primary" type="submit" className="deathbutton">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DeathCertificateForm;
