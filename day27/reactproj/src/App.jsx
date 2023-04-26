//Pascal Case -- Component Name (ThisIsFunction)

import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import StudentLister from "./components/StudentLister/StudentLister";

//Camel Case -- function name, variable name (thisIsFunction)
//Pascal Case ButtonComponent

//Parent to child data passing
function App() {
  const students = ["Sahil", "Nabaraj", "Prabin", "Mukesh"];
  let a, b;
  const [firsNum, setFIrstNum] = useState();

  const sumOfTwoNumbers = () => {
    console.log(a + b);
  };
  const valueOnchangeForFirstNumber = (event) => {
    a = event.target.value;
  };
  const valueOnchangeForSecondNumber = (event) => {
    b = event.target.value;
  };
  return (
    <>
      {/* Student Listing dynamically */}
      <StudentLister students={students} />

      <Input
        placeholder="Enter first number here"
        valueOnchange={valueOnchangeForFirstNumber}
      />
      <Input
        placeholder="Enter second number here"
        valueOnchange={valueOnchangeForSecondNumber}
      />
      <Button name="Sum" sumOfTwoNumbers={sumOfTwoNumbers} />
    </>
  );
}

export default App;
