import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchJobsByLanguage } from '../redux/actions/jobActions';
import '../assets/Style/Home.css'

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLanguageClick = async (language) => {
    try {
      // Dispatch an action to search for jobs related to the selected language
      await dispatch(searchJobsByLanguage(language));

      // Redirect to the joblistings page
      navigate('/joblistings');
    } catch (error) {
      console.error('Error searching for jobs:', error);
    }
  };

  return (
    <div className="container-home">
      <h2>Choose a Programming Language</h2>
      <div className="btn-container">
        <button
          className="btn btn-secondary"
          onClick={() => handleLanguageClick('Java')}
        >
          Java
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleLanguageClick('JavaScript')}
        >
          JavaScript
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleLanguageClick('C/C++')}
        >
          C/C++
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleLanguageClick('TypeScript')}
        >
          TypeScript
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleLanguageClick('Swift')}
        >
          Swift
        </button>
      </div>
    </div>
  );
};

export default Home;
