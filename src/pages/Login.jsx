import React, { useState } from "react";
import { FormBanner } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// our api
const api = "https://test.nexisltd.com/login";

// initial data state
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [currentStep, setCurrentStep] = useState("login");
  const [inputs, setInputs] = useState(initialState);

  const navigate = useNavigate();

  const { email, password } = inputs;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios
      .post(api, inputs)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        toast.success("Login Successful");
        navigate("/attendance");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <FormBanner />
        </div>
        <div className="col-md-5 ">
          <div className="form__container signup__container">
            <form onSubmit={handleSubmit}>
              <div className="p-5">
                <div className="row">
                  <h3 className="text-center signup__text">Login Form</h3>
                </div>

                {currentStep === "login" && (
                  <div className="stepThree">
                    <div className="pt-5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Write Email Address"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-5">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Write Password"
                        value={password}
                        onChange={handleChange}
                      />
                      <div className="fs-6">
                        your password must be 8 characters
                      </div>
                    </div>
                    <div className="">
                      <span className="signup__container pt-5">
                        <button type="submit" className="signup__button">
                          Login
                        </button>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
