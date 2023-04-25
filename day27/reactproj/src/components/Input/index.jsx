import React from "react";
import Button from "../Button";

const Input = (props) => {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} />
      <Button abc="Register" />
    </div>
  );
};

export default Input;
