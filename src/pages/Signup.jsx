import React, { useState } from "react";
import { FormBanner } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

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

const Signup = () => {
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

    if (!first_name || !last_name || !phone_number || !email || !password) {
      toast.error("please fill all input fields");
    } else {
      axios.post(api, inputs);
      toast.success("Sign Up Successful");
      navigate("/login");
    }
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
                        <button
                          className="next__step"
                          onClick={() => setCurrentStep("stepTwo")}
                        >
                          <div className="signup__button1">
                            Next Step
                            <span className="ms-2">
                              <BsArrowRight size={23} />
                            </span>
                          </div>
                        </button>
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
                        min="10"
                        max="15"
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
                      />
                    </div>

                    <div className="">
                      <span className="signup__container pt-5">
                        <button
                          className="back__btn"
                          onClick={() => setCurrentStep("stepOne")}
                        >
                          Back
                        </button>
                        <button
                          className="next__step"
                          onClick={() => setCurrentStep("stepThree")}
                        >
                          <div className="signup__button">
                            Next Step
                            <span className="ms-2">
                              <BsArrowRight size={23} />
                            </span>
                          </div>
                        </button>
                      </span>
                    </div>
                  </div>
                )}

                {currentStep === "stepThree" && (
                  <div className="stepThree">
                    <div className="pt-5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Write Password"
                        value={password}
                        onChange={handleChange}
                        minlength="8"
                      />
                      <div className="hintpassword">
                        your password must be 8 character
                      </div>
                    </div>
                    <div>
                      <span className="signup__container pt-5">
                        <button
                          className="back__btn"
                          onClick={() => setCurrentStep("stepTwo")}
                        >
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

export default Signup;
