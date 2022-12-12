import React, { useState } from "react";
import Base from "./footerANDheader";
import { API } from "../backend";


//API FETHING FROM BACKEND

const signup = user => {

  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//MAIN FUNCTION 

const Signup = () => {
  console.log("api is",API);

  //Destructuring 

  const [values, setValues] = useState({name: "",lastname: "",email: "",phone: "",age: "",gender: "",schedule:"",level: "",Package: "",
    payment: "",
    error: "",
    success: false
  });
  
  const { name,lastname ,email,phone,age,gender,schedule,level,Package,payment, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  
  //onSubmit Method

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name,lastname, email,phone,age,gender,schedule,level,Package,payment})
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({...values,name: "",lastname: "",email: "",phone: "",age: "",gender: "",schedule: "",level:"",Package:"",payment:"",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };


  //Method for Yoga Form Registration Frontend
  //Bootstrap is used

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form >
              <div className="form-group row">
                <div className="form-group col-md-6">
                 <label className="text-light">Name</label>
                  <input
                    className="form-control"
                    onChange={handleChange("name")}
                    type="text"
                    value={name}
                  />
               </div>
               
                <div className="form-group col-md-6 ">
                 <label className="text-light">Lastname</label>
                  <input
                    className="form-control"
                    onChange={handleChange("lastname")}
                    type="lastname"
                    value={lastname}
                  />
               </div>
               
              </div> 
          
            <div className="form-group row">
                   <div className="form-group col-md-6 ">
                         <label className="text-light">Email</label>
                           <input
                             className="form-control"
                             onChange={handleChange("email")}
                             type="email"
                            value={email}
                           />
                     </div>

                      <div className="form-group  col-md-6">
                          <label className="text-light">Number</label>
                            <input
                              className="form-control"
                              onChange={handleChange("phone")}
                              type="text"
                              value={phone}
                            />
                       </div>
            </div>

            <div className="form-group row">
                     <div className="form-group  col-md-6">
                         <label className="text-light">Age</label>
                           <input
                            className="form-control"
                            onChange={handleChange("age")}
                            type="text"
                            value={age}
                           />
                       </div>

                       <div className="form-group  col-md-6">
                           <label className="text-light">Gender</label>
                          
                            <input
                              className="form-control"
                              
                              onChange={handleChange("gender")}
                              type="text"
                              value={gender}
                              
                            />
                        </div>
            </div>

            <div className="form-group row">
               
                   <div className="form-group  col-md-6">
                     <label className="text-light">Schedule</label>
                      <input
                        className="form-control"
                        onChange={handleChange("schedule")}
                        type="text"
                        value={schedule}
                      />
                    </div>

                     <div className="form-group  col-md-6">
                        <label className="text-light">Level</label>
                          <input
                            className="form-control"
                            onChange={handleChange("level")}
                            type="text"
                            value={level}
                          />
                      </div>
               </div>



                     <div className="form-group row">
                            <div className="form-group  col-md-6">
                              <label className="text-light">.Package</label>
                               <input
                                   className="form-control"
                                   onChange={handleChange("Package")}
                                   type="number"
                                   value={Package}/>
                            </div>

                            <div className="form-group  col-md-6">
                              <label className="text-light">Payment</label>
                                <input
                                   className="form-control"
                                   onChange={handleChange("payment")}
                                   type="text"
                                   value={payment}/>
                             </div>
                     </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  //METHOD for Success REgistration Message

  function successMessage() {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            You are SUCCESSFULLY Registered
          </div>
        </div>
      </div>
    );
  }

  //Method for Failure Registration Message

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  //BASE COMPONENT FOOTER AND HEADER OF WEBSITE  AND METHOD CALLING
  return (
    <Base title="Admission Page" description="A page for Admission in YOGA Classes">
      {signUpForm()}
      {successMessage()}
      {errorMessage()}             
    </Base>
  );
};

export default Signup;
