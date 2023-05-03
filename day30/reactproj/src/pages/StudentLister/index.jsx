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

  const deleteHandler = (index) => {
    const filteredStudents = props.students.filter((value, i) => {
      return i !== index;
    });
    props.setStudents(filteredStudents);
  };

  const StudentItem = ({ stud, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedStudent, setEditedStudent] = useState(stud);

    const toggleEdit = () => {
      setIsEditing(!isEditing);
    };

    const cancelHandler = () => {
      setEditedStudent(stud);
      setIsEditing(false);
    };

    const changeHandler = (event) => {
      setEditedStudent(event.target.value);
    };

    return (
      <ListGroup.Item className="d-flex justify-content-between">
        {isEditing ? (
          <>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="editedStudent"
              value={editedStudent}
              onChange={(event) => changeHandler(event)}
            />
            <span>
              <Button variant="success">Save</Button>
              <Button variant="danger" onClick={cancelHandler}>
                Cancel
              </Button>
            </span>
          </>
        ) : (
          <>
            <h4 className="student">{stud}</h4>
            <span>
              <Button onClick={toggleEdit} className="ms-2">
                <AiFillEdit />
              </Button>
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => deleteHandler(index)}
              >
                <AiOutlineDelete />
              </Button>
            </span>
          </>
        )}
      </ListGroup.Item>
    );
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
          value={student}
        />
        <Button variant="secondary" onClick={submitHandler}>
          Add Student
        </Button>
      </Form>

      <ListGroup>
        {props.students.map((stud, index) => {
          return <StudentItem key={stud + index} stud={stud} index={index} />;
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
