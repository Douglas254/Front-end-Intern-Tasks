import React from "react";
import nexislogo from "../assets/logoNexis.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient">
        <div className="container">
          <img src={nexislogo} alt="nexisLogo" width="180" />
          <div className="d-flex flex-column justify-content-center align-items-center error__page">
            <h1>404</h1>
            <h3>OOPSIE POOPSIE</h3>
            <h5>This not the page you are looking for ?</h5>
            <h6>Go to 👇</h6>
            <button
              className="signup__button1"
              onClick={() => navigate("/login")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
