import React from "react";

//passing props

//One way data binding
//Parent Component
//Child Component

const Input = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.valueOnchange}
      />
    </>
  );
};

export default Input;
