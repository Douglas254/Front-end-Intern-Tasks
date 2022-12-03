import React, { useState } from "react";
import { FormBanner } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// our api
const api = "https://test.nexisltd.com/signup";

// initial data state
const initialState = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  password: "",
};

const Form1 = () => {
  const [currentStep, setCurrentStep] = useState("stepOne");
  const [inputs, setInputs] = useState(initialState);
  const navigate = useNavigate();

  const { first_name, last_name, phone_number, email, password } = inputs;

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
    axios.post(api, inputs);
    toast.success("Sign Up Successful");
    navigate("/login");
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
                  <h3 className="text-center signup__text">SignUp Form</h3>
                </div>
                {currentStep === "stepOne" && (
                  <div className="stepOne">
                    <div className="pt-5">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="Write First Name"
                        value={first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-5">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Write Last Name"
                        value={last_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="">
                      <span className="signup__container pt-5">
                        <div className="signup__button">
                          <button onClick={() => setCurrentStep("stepTwo")}>
                            Next Step <span>-- </span>
                          </button>
                        </div>
                      </span>
                    </div>

                    <div className="form__footer">
                      <div className="form__footer__container">
                        <span>Already have an account?</span>
                        <span className="login__here">
                          <Link to="login">Login here!</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === "stepTwo" && (
                  <div className="stepTwo">
                    <div className="pt-5">
                      <input
                        type="number"
                        name="phone_number"
                        id="phone_number"
                        placeholder="+254 7XXXXXXXXX"
                        value={phone_number}
                        onChange={handleChange}
                        className="w-75 me-2"
                      />
                    </div>
                    <div className="pt-5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Write Email Address"
                        value={email}
                        onChange={handleChange}
                        className="w-100 me-2"
                      />
                    </div>

                    <div className="">
                      <span className="signup__container pt-5">
                        <button onClick={() => setCurrentStep("stepOne")}>
                          Back
                        </button>
                        <div className="signup__button">
                          <button onClick={() => setCurrentStep("stepThree")}>
                            Next Step <span>-- </span>
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                )}

                {currentStep === "stepThree" && (
                  <div className="stepThree">
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
                        <button onClick={() => setCurrentStep("stepTwo")}>
                          Back
                        </button>
                        <button type="submit" className="signup__button">
                          Sign Up
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

export default Form1;
