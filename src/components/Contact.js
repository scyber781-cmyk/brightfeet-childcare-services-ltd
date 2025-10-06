import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Ready to get in touch? Fill out the form below or give us a call.</p>
        <form action="https://formspree.io/f/mjkararr" method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className="contact-info mt-5 p-4 bg-light rounded shadow-sm">
          <h4 className="mb-3">Our Details</h4>
          <p><i className="fas fa-envelope me-2"></i><strong>Email:</strong> brightfeetchildcareltd@yahoo.com</p>
          <p><i className="fas fa-phone-alt me-2"></i><strong>Phone:</strong> +44 7852565986</p>
          <p><i className="fas fa-map-marker-alt me-2"></i><strong>Location:</strong> Bolton Manchester United Kingdom</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
