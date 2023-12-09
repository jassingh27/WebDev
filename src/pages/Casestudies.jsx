import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Casestudies = () => {
  const [images, setImages] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    { id: 1, image: 'one.png', title: 'Case Study 1', details: 'Through the lens of Melbourne open data, data science in biotech unveils a fascinating narrative, bridging innovative advancements in biotechnology with rich, publicly accessible datasets, illuminating novel possibilities and solutions within the realm of health sciences and biotech innovation' },
    { id: 2, image: 'two.png', title: 'Case Study 2', details: 'Within the domain of predictive modeling for sustaining oil and gas supply chains, leveraging Melbournes open data enriches the analysis, offering a diverse perspective that enhances forecasting accuracy, operational efficiency, and informed decision-making within this critical sector.' },
    { id: 3, image: 'three.png', title: 'Case Study 3', details: 'Delving into the realm of education through data science, the utilization of Melbourne open data becomes a catalyst for transformative insights and informed strategies, fostering innovation and enhancing educational practices within the city dynamic learning landscape.' },
  ];

  useEffect(() => {
    // Dynamically import images
    Promise.all(
      caseStudies.map(async (study) => {
        const img = await import(`./images/${study.image}`);
        return { ...study, img: img.default };
      })
    ).then((images) => {
      setImages(images);
    });
  }, []);

  const openModal = (study) => {
    setSelectedStudy(study);
  };

  const closeModal = () => {
    setSelectedStudy(null);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="app">
          <section className="intro">
            <p><span style={{ fontSize: '40px' }}>Chameleon Melbourne Open Data</span> - <span style={{ fontSize: '20px', fontWeight: 'bold' }}>We unveil the intricate tapestry of data science's transformative impact across diverse sectors. Through compelling case studies exploring biotechnology, oil and gas supply management, and education, we showcase the power of Melbourne's open data. These narratives illuminate innovative solutions, empowering informed decision-making, and driving progress within our city's dynamic landscape.</span></p>
          </section>

          <section className="recent-work">
            <h2>Recent Work</h2>
            <div className="image-grid">
              {images.map((study) => (
                <div key={study.id} className="case-study">
                  <button onClick={() => openModal(study)}>
                    <img src={study.img} alt={study.title} />
                    <p style={{ fontSize: 'calc(1rem + 2px)', fontWeight: 'bold' }}>{study.title}</p>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {selectedStudy && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h2>{selectedStudy.title}</h2>
                <p>{selectedStudy.details}</p>
                {/* You can add more details here */}
              </div>
            </div>
          )}

          <section className="outro">
            <p style={{ fontSize: '25px', fontWeight: 'bold' }}>"Chameleon Melbourne Open Data stands as a testament to the profound possibilities unlocked by leveraging Melbourne's open data resources. From revolutionizing biotech insights to optimizing oil and gas supply chains and redefining educational strategies, these case studies highlight the integral role of data science in shaping a progressive future. Join us in exploring the boundless opportunities and transformative potential embedded within Melbourne's rich repository of open data."</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Casestudies;
