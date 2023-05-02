import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./student.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const StudentLister = (props) => {
  const [student, setStudent] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const data = props.students;
    data.push(student);
    props.setStudents(data);
    setStudent("");
  };

  const changeEventHandler = (event) => {
    setStudent(event.target.value);
  };

  return (
    <>
      <h3 className="text-center"> Student Lister</h3>
      <Form className="mb-4">
        <Form.Control
          type="text"
          name="student"
          placeholder="Enter Student Name"
          onChange={changeEventHandler}
        />
        <Button variant="secondary" onClick={submitHandler}>
          Add Student
        </Button>
      </Form>

      <ListGroup>
        {props.students.map((stud, index) => {
          return (
            <ListGroup.Item
              key={stud + index}
              className="d-flex justify-content-between"
            >
              <h4 className="student">{stud}</h4>
              <span>
                <Button>
                  <AiFillEdit />
                </Button>
                <Button variant="danger" className="ms-2">
                  <AiOutlineDelete />
                </Button>
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default StudentLister;

//Navbar
//Student Lister
//Login
//Register
