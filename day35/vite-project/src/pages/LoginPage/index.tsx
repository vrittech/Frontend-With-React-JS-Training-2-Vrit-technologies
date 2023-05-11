import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginData } from "../../services/axios.service";
import { loginInterface } from "../../interface/global.interface";
import {
  ToastifyError,
  ToastifySuccess,
} from "../../services/toastify.service";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data: loginInterface = {
      email,
      password,
    };
    const resp = await loginData(data);

    if (resp.data.status) {
      navigate("/home");
      ToastifySuccess(resp.data.message);
    } else {
      ToastifyError(resp.data.message);
    }
  };

  return (
    <Container>
      <h4>Login Page</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
