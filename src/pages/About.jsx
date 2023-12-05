// Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Your home page content goes here */}
        <h2>Welcome to the About Page!</h2>
      </main>
      <Footer />
    </div>
  );
};

export default About;