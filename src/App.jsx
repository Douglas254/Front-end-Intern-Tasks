import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
