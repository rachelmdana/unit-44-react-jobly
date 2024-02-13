import React, { useState, useEffect } from 'react';
import { JoblyApi } from '../../src/api';
import ApplyButton from '../components/ApplyButton';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        // Fetch jobs data from the API
        const jobsData = await JoblyApi.getJobs();
        // Set the jobs state with the data
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs(); // Call the async function
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <ApplyButton jobId={job.id} /> {/* Pass jobId as a prop */}
        </div>
      ))}
    </div>
  );
};

export default Jobs;
