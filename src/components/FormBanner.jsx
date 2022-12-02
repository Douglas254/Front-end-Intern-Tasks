import React from 'react'
import logo from "../assets/logo.png";
import banner from "../assets/nexis.png";

const FormBanner = () => {
  return (
    <>
      <div className="">
        <div className="logo pt-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <img src={banner} className="banner__img" alt="hero banner" />
        </div>
      </div>
    </>
  );
}

export default FormBanner