import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
