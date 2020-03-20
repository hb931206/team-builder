import React from "react";

const Jobs = props => {
  return (
    <div className="job">
      {props.jobs.map(job => (
        <div className="note" key={job.id}>
          <h2>Name:</h2>
          <p>{job.name}</p>
          <h2>Email:</h2>
          <p>{job.email}</p>
          <h2>Role:</h2>
          <p>{job.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
