import React, { useState, useEffect } from 'react';
import { JoblyApi } from '../../src/api';

const ApplyButton = ({ jobId }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Fetch the user's applied jobs when the component mounts
    JoblyApi.getUserAppliedJobs().then(response => {
      setAppliedJobs(response.appliedJobs);
    });
  }, []);

  const hasApplied = appliedJobs.includes(jobId);

  const handleApply = async () => {
    try {
      // Send a request to the backend to apply for the job
      await JoblyApi.applyForJob(jobId);
      // Update the list of applied jobs in the state
      setAppliedJobs([...appliedJobs, jobId]);
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  return (
    <button onClick={handleApply} disabled={hasApplied}>
      {hasApplied ? 'Already Applied' : 'Apply Now'}
    </button>
  );
};

export default ApplyButton;
