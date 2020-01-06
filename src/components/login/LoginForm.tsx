import { Form, Input, Button } from "antd";
import "./loginform.css";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: async values => {
      console.log(values);
    }
  });

  const submit = (
    <Button type="link" onClick={() => formik.submitForm()}>
      login ->
    </Button>
  );

  return (
    <form className="form" method="POST" onSubmit={formik.handleSubmit}>
      <Form.Item>
        <Input
          name="email"
          type="email"
          placeholder="hello@rqst.com"
          size="large"
          addonAfter={submit}
          {...formik.getFieldProps("email")}
        />
      </Form.Item>
    </form>
  );
};

export default LoginForm;
