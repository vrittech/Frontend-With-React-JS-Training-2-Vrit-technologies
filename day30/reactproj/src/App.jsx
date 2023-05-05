import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import StudentLister from "./pages/StudentLister";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage/index";

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
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
