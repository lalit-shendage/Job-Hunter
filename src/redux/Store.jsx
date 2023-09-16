import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/jobReducer'; // Import your root reducer

// Define the initial state if needed
const initialState = {};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer, // Pass in your root reducer
  preloadedState: initialState, // Pass in the initial state if needed
});

export default store;

