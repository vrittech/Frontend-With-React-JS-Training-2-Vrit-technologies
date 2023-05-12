import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Counter from "./components/Counter/Counter.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
