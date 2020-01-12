import React from "react";
import Page from "../page/Page";
import "./form.css";
import { Form as AntForm, Input, Button } from "antd";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import Navbar from "../navbar/Navbar";

const validate = async values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "* required";
  }
  if (!values.budget || values.budget < 1) {
    errors.budget = "* required";
  }
  if (!values.amount || values.amount < 1) {
    errors.amount = "* required";
  }
  if (!values.purpose) {
    errors.purpose = "* required";
  }
  if (!values.org) {
    errors.org = "* required";
  }
  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      budget: "",
      amount: "",
      purpose: "",
      org: ""
    },
    validate,
    onSubmit: async values => {
      console.log(values);
    }
  });

  const handleSubmit = async event => {
    event.preventDefault();
    formik.submitForm();
  };
  return (
    <Page>
      <Helmet>
        <title>Rqst::Requesting...</title>
      </Helmet>
      <Navbar />
      <div className="rqst-form centered">
        <form id="the-form">
          <AntForm.Item>
            <Input
              name="fullName"
              type="text"
              placeholder="Name"
              size="large"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <span className="err">{formik.errors.fullName}</span>
            ) : null}
          </AntForm.Item>
          <AntForm.Item>
            <Input
              name="budget"
              type='number'
              min={0}
              placeholder="Event Budget GH₵"
              size="large"
              {...formik.getFieldProps("budget")}
            />
            {formik.touched.budget && formik.errors.budget ? (
              <span className="err">{formik.errors.budget}</span>
            ) : null}
          </AntForm.Item>
          <AntForm.Item>
            <Input
              name="amount"
              type='number'
              min={0}
              placeholder="Request Amount GH₵"
              size="large"
              {...formik.getFieldProps("amount")}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <span className="err">{formik.errors.amount}</span>
            ) : null}
          </AntForm.Item>
          <AntForm.Item>
            <Input.TextArea
              name="purpose"
              placeholder="Funds Purpose"
              size="large"
              rows={10}
              {...formik.getFieldProps("purpose")}
            />
            {formik.touched.purpose && formik.errors.purpose ? (
              <span className="err">{formik.errors.purpose}</span>
            ) : null}
          </AntForm.Item>
          <AntForm.Item>
            <Input
              name="org"
              type="text"
              placeholder="Club / Society / Group"
              size="large"
              {...formik.getFieldProps("org")}
            />
            {formik.touched.org && formik.errors.org ? (
              <span className="err">{formik.errors.org}</span>
            ) : null}
          </AntForm.Item>
          <AntForm.Item>
            <Button size="large" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </AntForm.Item>
        </form>
      </div>
    </Page>
  );
};

export default Form;
