// jobReducer.js
const initialState = {
  jobListings: [],
  selectedJob: null, 
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB_LISTINGS":
      return {
        ...state,
        jobListings: action.payload,
      };
    case "SET_SELECTED_JOB": 
      return {
        ...state,
        selectedJob: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
