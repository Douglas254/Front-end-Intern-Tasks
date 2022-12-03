import React, { useState } from "react";
import { FormBanner } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
  const [error, setError] = useState(null);


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

    if (!email || !password) {
      toast.error("please fill all input fields");
    } else {
      axios
        .post(api, inputs)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data));
          toast.success("Login Successful");
          navigate("/attendance");
        })
        .catch((err) => setError(err.response.data.error))
    }
  };

  console.log(error);
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
                  <h3 className="text-center signup__text">Log in Form</h3>
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
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Write Password"
                        value={password}
                        onChange={handleChange}
                        minlength="8"
                      />
                      <div className="hintpassword">
                        your password must be 8 characters
                      </div>
                    </div>
                    <div className="pt-3"> {error && <p className="error__server">{error}</p>}</div>
                    <div className="">
                      <span className="signup__container pt-5">
                        <button type="submit" className="signup__button1">
                          Log In
                        </button>
                      </span>
                    </div>

                    <div className="form__footer">
                      <div className="form__footer__container">
                        <span>Don't have an account?</span>
                        <span className="login__here">
                          <Link to="/">Signup here!</Link>
                        </span>
                      </div>
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
