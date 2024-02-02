import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { MarriageCertificate } from "../../../../Service/UserApi";
import Header from "../../../Header/Header";
import './MarriageCertificateForm.css';
const MarriageCertificateForm = () => {
  const { userDetails} = useSelector((state) => ({
    userDetails: state.user.userDetails,
  }));
  
  const initialValues = {
    bridegroomname: "",
    bridename: "",
    dateofmarriage: "",
    placeofmarriage: "",
    registrationno: "",
    address: "",
    aadhar:"",
    
  };

  const validationSchema = Yup.object({
    bridegroomname: Yup.string()
      .required("* This field is required")
      .min(3, "Must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "Numbers are Not Allowed"),
  
    bridename: Yup.string()
      .required("* This field is required")
      .min(3, "Must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "Numbers Are Not Allowed "),
  
    dateofmarriage: Yup.date().required("* This field is required"),
  
    placeofmarriage: Yup.string().required("* This field is required"),
  
    registrationno: Yup.string().required("* This field is required"),
  
    address: Yup.string().required("* This field is required"),
  
    aadhar: Yup.string()
      .required("* This field is required")
      .matches(/^\d{12}$/, "Must be 12 digits"),
  });
  

  const onSubmit = async (values) => {

    try {
      const response = await MarriageCertificate(values,userDetails);
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
            className="p-4 border rounded shadow mb-5"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="text-center mb-4">Marriage Certificate</h2>

            <Form.Group controlId="formBridegroomName">
              <Form.Label>Name of the Bridegroom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="bridegroomname"
                value={formik.values.bridegroomname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched. bridegroomname && formik.errors. bridegroomname ? (
                <p>{formik.errors. bridegroomname}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formBrideName">
              <Form.Label>Name of the Bride</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="bridename"
                value={formik.values.bridename}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.bridename && formik.errors.bridename ? (
                <p>{formik.errors.bridename}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formDateOfMarriage">
              <Form.Label>Date of Marriage</Form.Label>
              <Form.Control
                type="date"
                name="dateofmarriage"
                value={formik.values.dateofmarriage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.dateofmarriage && formik.errors.dateofmarriage ? (
                <p>{formik.errors.dateofmarriage}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formComplaintPhoneNumber">
              <Form.Label>AadharNo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Aadhar Number"
                name="aadhar"
                value={formik.values.aadhar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.aadhar && formik.errors.aadhar ? (
                <p>{formik.errors.aadhar}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formPlaceOfMarriage">
              <Form.Label>Place of Marriage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter place"
                name="placeofmarriage"
                value={formik.values.placeofmarriage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.placeofmarriage &&
              formik.errors.placeofmarriage ? (
                <p>{formik.errors.placeofmarriage}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formMarriageRegistrationNo">
              <Form.Label>Marriage Registration No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter registration number"
                name="registrationno"
                value={formik.values.registrationno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.registrationno &&
              formik.errors.registrationno ? (
                <p>{formik.errors.registrationno}</p>
              ) : null}
            </Form.Group>
          
            <Form.Group controlId="formApplicantAddress">
              <Form.Label> Address</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter applicant address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address &&
              formik.errors.address ? (
                <p>{formik.errors.address}</p>
              ) : null}
            </Form.Group>

            <Button variant="primary" type="submit" className="marriagebutton">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MarriageCertificateForm;
