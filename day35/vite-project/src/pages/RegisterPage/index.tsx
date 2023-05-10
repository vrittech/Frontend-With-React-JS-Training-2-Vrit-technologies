import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";
import { dataInterface } from "../../interface/global.interface";
import { registerData } from "../../services/axios.service";

const RegisterPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    const dateOfBirth = moment(dob).format("YYYY-MM-DD");
    // const dateOfBirth = new Date(dob);
    const data: dataInterface = {
      fullName: fullName,
      phoneNumber,
      email,
      dob: dateOfBirth,
      password,
    };
    registerData(data);
  };
  return (
    <Container>
      <h4>Register Page</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            onChange={(e: any) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            name="phoneNumber"
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter dob"
            onChange={(e: any) => setDob(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
