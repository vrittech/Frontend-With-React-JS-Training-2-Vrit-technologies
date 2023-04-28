import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import StudentLister from "./pages/StudentLister";

function App() {
  const students = ["Prabin", "Ryu", "Nabaraj"];
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route
          path="/students"
          element={<StudentLister students={students} />}
        />
      </Routes>
    </>
  );
}

export default App;
