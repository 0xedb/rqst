import React from "react";
import Page from "../page/Page";
import "./form.css";
import { Form as AntForm, Input, InputNumber, Button } from "antd";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import Navbar from "../navbar/Navbar";

const Form = () => {
  return (
    <Page>
      <Helmet>
        <title>Rqst::Requesting...</title>
      </Helmet>
      <Navbar />
      <div className="rqst-form centered">
        <form id="the-form">
          <AntForm.Item>
            <Input type="text" placeholder="Name" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <InputNumber min={0} placeholder="Event Budget GH₵" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <InputNumber
              min={0}
              placeholder="Request Amount GH₵"
              size="large"
            />
          </AntForm.Item>
          <AntForm.Item>
            <Input.TextArea placeholder="Funds Purpose" size="large" rows={10} />
          </AntForm.Item>
          <AntForm.Item>
            <Input
              type="text"
              placeholder="Club / Society / Group"
              size="large"
            />
          </AntForm.Item>
          <AntForm.Item>
            <Button size="large" htmlType="submit">
              Submit
            </Button>
          </AntForm.Item>
        </form>
      </div>
    </Page>
  );
};

export default Form;
