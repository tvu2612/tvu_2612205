import "./style.css";
import "./App.css";
import React, { useState } from "react";
export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submitted && valid&&(
          <div>
            {" "}
            <h2>
              Welcome, {values.firstName} {values.lastName} {" "}
              </h2>
              <div>Your Registration was successful!</div>
          </div>
        )}
        {!valid && (
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />)}
          {submitted && !values.firstName && (<span>Please enter ur first name</span>)}
          {!valid && (
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />)}
          {submitted && !values.firstName && (<span>Please enter ur last name</span>)}
          {!valid && (
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />)}
          {submitted && !values.firstName && (<span>Please enter ur email</span>)}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
