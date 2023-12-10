import React from 'react';
import './App.css'; // Assuming you have a separate CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-title">
          {/* Updated path to logo.png */}
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Chameleon Logo" className="logo" />
          <h1>Chameleon MOP</h1>
        </div>
        <p className="small-paragraph">"Chameleon Melbourne Open Data serves as a platform utilized by our adept data science team, showcasing insightful case studies derived from the rich repository of Melbourne's Open Data, illuminating innovative solutions and transformative insights."</p>
      </header>

      <section className="recent-work">
        <h2>Recent Work</h2>
        <div className="image-grid">
          <div className="case-study">
            {/* Updated paths to case study images */}
            <img src={process.env.PUBLIC_URL + '/images/one.png'} alt="Case Study 1" />
            <p style={{ fontSize: 'calc(1rem + 2px)', fontWeight: 'bold' }}>Case Study 1</p>
          </div>
          <div className="case-study">
            <img src={process.env.PUBLIC_URL + '/images/two.png'} alt="Case Study 2" />
            <p style={{ fontSize: 'calc(1rem + 2px)', fontWeight: 'bold' }}>Case Study 2</p>
          </div>
          <div className="case-study">
            <img src={process.env.PUBLIC_URL + '/images/three.png'} alt="Case Study 3" />
            <p style={{ fontSize: 'calc(1rem + 2px)', fontWeight: 'bold' }}>Case Study 3</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Chameleon MOP Open Data</p>
          <p>GitHub</p>
          <p>Privacy Policies</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
