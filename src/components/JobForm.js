import React, { useState } from "react";

const JobForm = props => {
  const [jobState, setJobState] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setJobState({
      ...jobState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addRole({
      ...jobState,
      id: Date.now()
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name"> Name:</label>
      <input
        type="text"
        name="name"
        value={jobState.name}
        onChange={changeHandler}
        placeholder="Put Name here!"
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={jobState.email}
        onChange={changeHandler}
        placeholder="Put Email Here"
      ></input>
      <label htmlFor="role"> Role:</label>
      <input
        type="text"
        name="role"
        value={jobState.role}
        onChange={changeHandler}
        placeholder="Put Role Here"
      ></input>
      <button type="submit">Create Card</button>
    </form>
  );
};

export default JobForm;
