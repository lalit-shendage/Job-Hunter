import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Style/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  // Handle sign out
  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/signin');
  };

  // Check if the user is logged in (based on the value in local storage)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    // Render the navbar only if the user is logged in
    isLoggedIn && (
      <nav className="navbar ">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/home">
            Home
          </Link>
          <button className="btn " onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
