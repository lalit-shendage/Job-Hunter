// // jobActions.js


// Action type constants
export const SET_JOB_LISTINGS = 'SET_JOB_LISTINGS';
export const SET_SELECTED_JOB = 'SET_SELECTED_JOB';
import axios from 'axios'; 

export const searchJobsByLanguage = (language) => {
  return async (dispatch) => {
    try {
      // Make an API request to fetch all job listings
      const response = await axios.get('https://my-json-server.typicode.com/lalit-shendage/job-listing-data/posts');

      // Filter the job listings based on the selected language
      const filteredJobs = response.data.filter((job) => job.language === language);

      // Dispatch an action to store the filtered job listings in the Redux store
      dispatch({ type: 'SET_JOB_LISTINGS', payload: filteredJobs });

      // Redirect to the job listings page (you can use React Router for navigation)
      // Example: history.push('/joblistings');
    } catch (error) {
      console.error('Error searching for jobs:', error);
    }
  };
};


// Action creator to get a job by ID
export const getJobById =  (jobId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/lalit-shendage/job-listing-data/posts');
      // Filter the jobListings data to find the job with the matching ID
      console.log(jobId)
      const selectedJob = response.data.find((job) => ':'+job.id === jobId);      
      if (selectedJob) {
        
        // Dispatch an action to store the selected job in the Redux store
        dispatch({ type: SET_SELECTED_JOB, payload: selectedJob });
      } else {
        // Handle the case where the job with the specified ID was not found
        console.error(`Job with ID ${jobId} not found.`);
      }
    } catch (error) {
      console.error('Error fetching job by ID:', error);
    }
  };
};
