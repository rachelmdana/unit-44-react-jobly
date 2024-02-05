import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary}</p>
      {/* Render other job info */}
    </div>
  );
};

export default JobCard;
