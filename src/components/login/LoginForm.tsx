import { Form, Input, Button } from "antd";
import "./loginform.css";
import { useFormik } from "formik";
import { sendEmail } from '../../util/firebase'; 

const validate = ({ email }: EmailValidate) => {
  let errors: EmailValidate = {};
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) errors.email = "* required";
  else if (!EMAIL_REGEX.test(email.toLowerCase()))
    errors.email = "* invalid email";
  return errors;
};
 
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "" 
    },
    onSubmit: async values => {
      console.log(values);
      sendEmail('daf')
    },
    validate
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
        <div className="error">
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null}
        </div>
      </Form.Item>
    </form>
  );
};

export default LoginForm;
