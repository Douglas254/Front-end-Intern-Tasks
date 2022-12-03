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
  // console.log(config);

  // get key values of the object
  const dat = Object.keys(data);

  const rowList = dat.map((list) => {
    // get date according index 
    const date = Object.keys(data[list].attendance)[25];

    // split the attendance name to two 
    const [first, last] = (data[list].name).split(' ')

    return (
      <tr>
        <td>{date}</td>
        <td>{first} {last}</td>
        <td>{data[list].attendance[date].status}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="container-fluid">
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
            <tbody>{rowList}</tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Attendance;
