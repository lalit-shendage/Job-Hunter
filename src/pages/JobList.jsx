import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 


const JobList = () => {
  const filteredJobListings = useSelector((state) => state.jobListings);
  const navigate = useNavigate(); 

  const handleClick = (jobId) => {
    console.log(`Clicked on job with ID: ${jobId}`);
    navigate(`/jobDetails/:${jobId}`);

  };
  return (
    <div className="container">
    <h2>Filtered Job Listings</h2>
    <div className="row">
      {filteredJobListings.map((job) => (
        <div className="col-md-4 mb-4" key={job.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.description}</p>
             
              <button
                className="btn btn-secondary"
                onClick={() => handleClick(job.id)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default JobList
