import { useState } from "react";
// import emailjs from "emailjs-com";

import React from "react";

const initialState = {
  empID: "",
  email: "",
  name: "",
  empPIN: "",
  phone: "",  
};

export const Services = (props) => {


  const [{ empID, email, name, empPIN, phone }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(empID, email, name, empPIN, phone);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json", "Access-Control-Allow-Origin");
    var raw = JSON.stringify({ "EmployeeID": empID, "EmailAddress": email, "EmployeeName": name, "EmployeePIN": empPIN, "PhoneNumber": phone });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://ax8odrofcf.execute-api.us-east-1.amazonaws.com/dev/add_emp", requestOptions)
    .then(response => response.text())
    // .then(result => alert(JSON.parse(result).body)) 
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    /*  
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
    */

  };

  return (
    <div>
      <div id="contact">
        <div className="container">
        <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2>Register Employee</h2>
                <p>
                  Fill out the below fields and submit to register employee in booking database.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="empID"
                        name="empID"
                        className="form-control"
                        placeholder="Employee ID"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">Must be 3 numbers only
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">Must be in email format, example: john.doe@example.com
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Employee Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">Must be a name
                    </div>
                  </div>
                </div>          

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="empPIN"
                        id="empPIN"
                        name="empPIN"
                        className="form-control"
                        placeholder="Employee PIN"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">Must be 3 numbers only
                    </div>
                  </div>
                </div>
                

                <div className="row">
                  <div className="col-md-6">
                  <div className="form-group">
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="+19876543210"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">Must be in format +19876543210
                    </div>
                  </div>
                </div>      


                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

        {/*        
        <MyForm onSubmit={async (fields) => {
          console.log(fields)
        
          const response = await fetch("https://rj8n8gh58l.execute-api.us-east-1.amazonaws.com/dev", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(fields) // Pass in form data
          })
        }

        }  />
        */}  
        {/*
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        */}