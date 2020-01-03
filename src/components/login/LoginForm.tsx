import { Form, Input } from "antd";

const submit = <div>hello</div>;


const LoginForm = () => {
  return (
    <form method="POST">
      <Form.Item>
        <Input
          type="email"
          placeholder="hello@rqst.com"
          size="large"
          addonAfter={submit}
        />
      </Form.Item>
    </form>
  );
};

export default LoginForm;
