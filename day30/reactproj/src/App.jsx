import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import StudentLister from "./pages/StudentLister";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage/index";
import ProductDetailPage from "./pages/ProductsDetailPage";
import GlobalState from "./context/GlobalState";

function App() {
  const [students, setStudents] = useState(["Prabin", "Ryu", "Nabaraj"]);

  return (
    <>
      <GlobalState>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route
            path="/students"
            element={
              <StudentLister students={students} setStudents={setStudents} />
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
        <ToastContainer />
      </GlobalState>
    </>
  );
}

export default App;
