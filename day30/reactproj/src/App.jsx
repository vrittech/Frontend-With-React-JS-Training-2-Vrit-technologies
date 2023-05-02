import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import StudentLister from "./pages/StudentLister";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(["Prabin", "Ryu", "Nabaraj"]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route
          path="/students"
          element={
            <StudentLister students={students} setStudents={setStudents} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
