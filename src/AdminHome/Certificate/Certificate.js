import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addCertificate } from "../../Service/AdminApi";
import './Certificate.css';
import { Link } from "react-router-dom";
const Certificate = () => {
  const initialValues = {
    certificatename: "",
    requirements: "",
   
  };

  const validationSchema = Yup.object({
    certificatename: Yup.string().required("* This field is required"),
    requirements: Yup.string().required("* This field is required"),

  });

  const onSubmit = async (values) => {
    try {
        const response = await addCertificate(values);
        
    } catch (error) {
      console.error("Error submitting certificate form:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Form
            className="p-4 border rounded shadow"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="text-center mb-4">Certificate Management</h2>

            <Form.Group controlId="formBridegroomName" className="certificatename">
              <Form.Label>Certificate Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="certificatename"
                value={formik.values.certificatename}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.certificatename && formik.errors.certificatename ? (
                <p>{formik.errors.certificatename}</p>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formBrideName" className="requirements">
              <Form.Label>Certificate Requirements</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="requirements"
                value={formik.values.requirements}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.requirements && formik.errors.requirements ? (
                <p>{formik.errors.requirements}</p>
              ) : null}
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" id="admincertificate">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
<Link to="/admin/usercertificates">User Application</Link>
    </>
  );
};

export default Certificate;
