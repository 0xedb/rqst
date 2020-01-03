import { Form, Input } from "antd";
const LoginForm = () => {
  return (
    <form method="POST">
      <Form.Item> 
        <Input type='email' placeholder="hello@rqst.com" size='large' />
      </Form.Item>
    </form>
  );
};

export default LoginForm;
