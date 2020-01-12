import React from "react";
import Page from "../page/Page";
import "./form.css";
import { Form as AntForm, Input, InputNumber } from "antd";
import { useFormik } from "formik";

const Form = () => {
  return (
    <Page>
      <div className="rqst-form centered">
        <form>
          <AntForm.Item>
            <Input type="text" placeholder="Name" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <InputNumber min={0} placeholder="Event Budget" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <InputNumber min={0} placeholder="Request Amount" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <Input.TextArea placeholder="Funds Purpose" size="large" />
          </AntForm.Item>
          <AntForm.Item>
            <Input
              type="text"
              placeholder="Club / Society / Group"
              size="large"
            />
          </AntForm.Item>
        </form>
      </div>
    </Page>
  );
};

export default Form;
