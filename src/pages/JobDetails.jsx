import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../redux/actions/jobActions';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedJob = useSelector((state) => state.selectedJob);

  

  useEffect(() => {
    // Dispatch the action to fetch the selected job by ID
    dispatch(getJobById(id));
  }, [dispatch, id]);

  const handleClick = () => {
    navigate(`/Form`);
  };

  return (
    <div className="container mt-5 form-1">
      <h2>Job Details</h2>
      {selectedJob && (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{selectedJob.title}</h3>
            <p className="card-text">
              <strong>Company:</strong> {selectedJob.company}
            </p>
            <p className="card-text">
              <strong>Language:</strong> {selectedJob.language}
            </p>
            <p className="card-text">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="card-text">
              <strong>Requirements:</strong> {selectedJob.requirements}
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleClick();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
