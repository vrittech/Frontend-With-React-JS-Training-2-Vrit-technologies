const Button = ({ name, sumOfTwoNumbers }) => {
  return (
    <>
      <button onClick={sumOfTwoNumbers}>{name}</button>
    </>
  );
};

export default Button;
