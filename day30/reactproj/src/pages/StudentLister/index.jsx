import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./student.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import {
  ToastifySuccess,
  ToastifyWarning,
} from "../../services/toastify.service";

const StudentLister = (props) => {
  const [student, setStudent] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = props.students;
    data.push(student);
    props.setStudents(data);
    setStudent("");
    ToastifySuccess("Student added succesfully");
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

  const editHandler = (index, editedStudent) => {
    const updStudent = props.students.map((student, i) => {
      return i === index ? editedStudent : student;
    });
    props.setStudents(updStudent);
  };

  const navigateProdsPage = () => {
    navigate("/products");
  };

  const StudentItem = ({ stud, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedStudent, setEditedStudent] = useState(stud);

    const toggleEdit = () => {
      setIsEditing(true);
    };

    const cancelHandler = () => {
      setEditedStudent(stud);
      setIsEditing(false);
      ToastifyWarning("Cancelled");
    };

    const changeHandler = (event) => {
      setEditedStudent(event.target.value);
    };

    const saveHandler = (event) => {
      event.preventDefault();
      editHandler(index, editedStudent);
      setIsEditing(false);
      ToastifySuccess(`${editedStudent} user edited successfully`);
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
              <Button variant="success" onClick={saveHandler}>
                Save
              </Button>
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
        <Button variant="primary" className="ms-2" onClick={navigateProdsPage}>
          GO to products page
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
