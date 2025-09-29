import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-5 text-white text-center d-flex align-items-center justify-content-center">
      <div className="home-background"></div>
      <div className="container position-relative">
        <h2>Welcome!</h2>
        <p className="lead">Your child's home away from home. We provide a safe, nurturing, and stimulating environment for your little ones to learn and grow.</p>
        <p className="mt-4 catchy-statement"><strong>Education focused and fun:</strong> Where learning meets laughter, every day is an adventure!</p>
        <p className="catchy-statement"><strong>Affordable, safe and convenient:</strong> Quality care that fits your budget, ensures peace of mind, and is always within reach.</p>
        <a href="#contact" className="btn btn-primary btn-lg mt-4">Book a Call</a>
      </div>
    </section>
  );
};

export default Home;
