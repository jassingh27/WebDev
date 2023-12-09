import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './faq.css';

const Datasets = () => {
  return (
    <div>
      <Header />
      <main>
        <img src="src/assets/faq.png" alt="Header Image" />

        <div class="flip-box-container">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <p>What is the Open Data Playground?</p>
                    </div>
                    <div class="flip-box-back">
                        <p>Melbourne Open Data Playground (MOP) is a capstone project sponsored by Deakin University. It provides use cases and educational material to help you leverage Melbourne Open Data for your business and research needs. For more information, see our 'About' page.</p>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <p>Do I need to request access from the City of Melbourne to use the datasets?</p>
                    </div>
                    <div class="flip-box-back">
                        <p>Melbourne Open Data is a strong advocate of open access. You do not need to directly request information from us. You may like to look at our educational material which provides a step-by-step guide to using Open Data using the Socrata API.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-box-container">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <p>How can I access an 'open data use case' discovery portal to better understand how to leverage Melbourne Open Data within my business?</p>
                    </div>
                    <div class="flip-box-back">
                        <p>You may like to look at the educational material which provides a step-by-step guide to using Melbourne Open Data to visualize key insights for your business.</p>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <p>As a business owner, how can I visualize the pedestrian count in Melbourne?</p>
                    </div>
                    <div class="flip-box-back">
                        <p>Our platform includes a variety of use cases about parking availability, pedestrian traffic data, business opportunities, and business planning. We also provide educational material that provides you with the tools to explore Melbourne Open Data in your own time.</p>
                    </div>
                </div>
            </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Datasets;
