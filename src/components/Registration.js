import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({
          parentName: '',
          childName: '',
          childAge: '',
          email: '',
          phone: '',
        });
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="register" className="py-5">
      <div className="container">
        <h2>Register</h2>
        <p>Fill out the form below to register your child.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="parentName" className="form-label">Parent's Name</label>
            <input type="text" className="form-control" id="parentName" value={formData.parentName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="childName" className="form-label">Child's Name</label>
            <input type="text" className="form-control" id="childName" value={formData.childName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="childAge" className="form-label">Child's Age</label>
            <input type="number" className="form-control" id="childAge" value={formData.childAge} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </section>
  );
};

export default Registration;
