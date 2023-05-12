import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, storeArray } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: any) => {
    return state.counterReducer.count;
  });
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "20rem", margin: "auto" }}>
      <Card.Title className="text-center">{count}</Card.Title>
      <Card.Body>
        <Button
          className="btn btn-success me-1"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          className="btn btn-secondary me-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button className="btn btn-danger" onClick={() => dispatch(reset())}>
          Reset
        </Button>
        <Button
          className="btn btn-dark"
          onClick={() => dispatch(storeArray(["Ram", "Shayam"]))}
        >
          Store Array
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Counter;
