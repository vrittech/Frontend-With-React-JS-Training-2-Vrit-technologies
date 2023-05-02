import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const incrementCounter = () => {
    setCount(count + 1);
    setErrorMessage("");
  };

  const resetCounter = () => {
    setCount(0);
    setErrorMessage("");
  };

  const decrementCounter = () => {
    if (count <= 0) {
      setErrorMessage("Count cannot be less than 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      <Card className="">
        {/* Same for declaring header */}
        <Card.Header>Counter App</Card.Header>
        <Card.Body>{count}</Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={incrementCounter}>
            Increment
          </Button>
          <Button variant="danger" className="ms-2" onClick={resetCounter}>
            Reset
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={decrementCounter}
          >
            Decrement
          </Button>
          {/* <div>{errorMessage}</div> */}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Counter;
