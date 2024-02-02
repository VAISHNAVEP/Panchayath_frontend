import React from "react";
import { useFormik } from "formik";
import { Container, Form, Row, Col,Button} from "react-bootstrap";
import * as Yup from "yup";
import { BillAmount } from "../../Service/AdminApi";
import './Billing.css';
const Billing = () => {
  const initialValues = {
    amount: "",
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required("* This field is required"),
  });
  const onSubmit = async (values) => {
  
    try {
      const response = await BillAmount(values);
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
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Form
            className="p-4 border rounded shadow"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <h2 className="text-center mb-4">Bill Amount</h2>

            <Form.Group controlId="formComplaintName" className="billamount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Bill Amount"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.amount && formik.errors.amount ? (
                <p>{formik.errors.amount}</p>
              ) : null}
            </Form.Group>
            <Button variant="primary" type="submit" className=" mt-3" id="billbtn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Billing;
