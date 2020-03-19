import React from "react";

const Jobs = props => {
  return (
    <div className="job-list">
      {props.jobs.map(job => (
        <div className="note" key={job.id}>
          <h2>{job.name}</h2>
          <p>{job.email}</p>
          <p>{job.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
