//Pascal Case -- Component Name (ThisIsFunction)

import { useState } from "react";
import StudentPage from "./pages/StudentPage";
import SumPage from "./pages/SumPage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

//Camel Case -- function name, variable name (thisIsFunction)
//Pascal Case ButtonComponent

//Parent to child data passing

//state  react hooks
function App() {
  const students = ["Sahil", "Nabaraj", "Prabin", "Mukesh", "Ryu"];

  //const

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNum, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const sumOfTwoNumbers = () => {
    setSum(Number(firstNumber) + Number(secondNum));
  };

  const valueOnchangeForFirstNumber = (event) => {
    setFirstNumber(event.target.value);
  };

  const valueOnchangeForSecondNumber = (event) => {
    setSecondNumber(event.target.value);
  };
  return (
    <>
      {/* Student Listing dynamically */}
      <BrowserRouter>
        <StudentPage students={students} />
        <Routes>
          {/* <Route
            path="/dashboard"
            element={<StudentPage students={students} />}
          /> */}
          <Route
            path="/sum"
            element={
              <SumPage
                sumOfTwoNumbers={sumOfTwoNumbers}
                valueOnchangeForFirstNumber={valueOnchangeForFirstNumber}
                valueOnchangeForSecondNumber={valueOnchangeForSecondNumber}
                sum={sum}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
