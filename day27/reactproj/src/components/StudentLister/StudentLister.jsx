import React from "react";
import ListComponent from "../ListComponent";
const StudentLister = ({ students }) => {
  //destructuring
  // const { students } = props;
  // console.log(students);

  return (
    <div>
      <ul>
        {students.map((student, index) => {
          return <ListComponent key={student} student={student} />;
        })}
      </ul>
    </div>
  );
};

export default StudentLister;
