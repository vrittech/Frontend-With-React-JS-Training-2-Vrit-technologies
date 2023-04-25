//Pascal Case -- Component Name (ThisIsFunction)

import Button from "./components/Button";
import Input from "./components/Input";

//Camel Case -- function name, variable name (thisIsFunction)

function App() {
  return (
    <>
      <Input placeholder="Enter your name here" />
      <Input />
      <Button abc="Login" />
    </>
  );
}

export default App;

// const App = () => {
//   const array = [1, 23, 44];
//   return (
//     <>
//       <div>Test class vrit</div>
//       <div>Test class </div>
//     </>
//   );
// };

// export default App;
