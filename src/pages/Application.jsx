import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Application = () => {
  const selectedJob = useSelector((state) => state.selectedJob);

  // Initialize state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Retrieve the email from localStorage and set it as the initial value
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display a confirmation prompt with job title and name
    const confirmationMessage = `Are you sure you want to apply for "${selectedJob.title}" as "${name}"?`;

    if (window.confirm(confirmationMessage)) {
      // User confirmed, process the form data (e.g., send it to a server or store it in Redux)
      // You can access the form fields as name, email, coverLetter, and file

      // Example: Send the data to a server
      const formData = {
        name,
        email,
        coverLetter,
        file,
      };

      console.log('Form data:', formData);

      // Reset the form fields
      setName('');
      setCoverLetter('');
      setFile(null);

      // Show a success message or redirect to a thank you page
      alert('Application submitted successfully!');

      // You can add further logic here, such as redirecting the user to a thank you page
    } else {
      // User canceled, no action required
    }
  };

  return (
    <div className="container mt-5 form-1">
    <h2>Apply for the Job</h2>
    {selectedJob && (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            disabled // Email is fetched from localStorage and disabled for editing
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="file">Upload File (e.g., Resume):</label>
          <br/>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="form-control-file"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Apply
        </button>
      </form>
    )}
  </div>
  );
};

export default Application;
