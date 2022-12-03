import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import Table from "react-bootstrap/Table";


const api = "https://test.nexisltd.com/test ";
const { access_token } = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: { Authorization: `Bearer ${access_token}` },
};

const Attendance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(api, config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  console.log(config);

  const dat = Object.values(data).forEach((val) => console.log(val));
// console.log(dat);
  return (
    <>
      <div className="container-fluid">
        {" "}
        <div>
          <div className="logo pt-5">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="signup__container">
          <div className="attendance__title">Attendance information</div>
        </div>
        <div className="container pt-4">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3/12/22</td>
                <td>Douglas Obara</td>
                <td>Present</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Attendance;
