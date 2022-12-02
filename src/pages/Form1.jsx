import React, { useState } from "react";
import { FormBanner } from "../components";

const Form1 = () => {
  const [currentStep, setCurrentStep] = useState("stepOne");

  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <FormBanner />
        </div>
        <div className="col-md-5 ">
          <div className="form__container signup__container">
            <form>
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
                      />
                    </div>
                    <div className="pt-5">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Write Last Name"
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
                          <a href="">Login here!</a>
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
                        placeholder="+2547 XXXXXXXXX"
                      />
                    </div>
                    <div className="pt-5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Write Email Address"
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
