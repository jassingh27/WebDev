import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datasets = () => {
  return (
    <div>
      <Header />
      <main>
        
<div class="header">
 <h2>What are you Looking for Today?</h2>
</div>

<div class="container">
 <div class="section ">
    
    <img src="images/people.png" alt="Property"/>
    <h3>People</h3>
 </div>

 <div class="section">
   
 </div>

 <div class="section">
    
    <img src="images/cloud.png" alt="Transportation"/>
    <h3>Sensors</h3>
 </div>

 <div class="clearfix"></div>
</div>
<div class="container">
    <div class="section">
       
       
    </div>
   
    <div class="section">
       
       <img src="images/recycle.png" alt="Environment"/>
       <h3>Environment</h3>
    </div>
   
    <div class="section">
      
    </div>
   
    <div class="clearfix"></div>
   </div>
   <div class="container">
    <div class="section">
       
       <img src="images/house.png" alt="Property"/>
       <h3>Property</h3>
    </div>
   
    <div class="section">
       
    </div>
   
    <div class="section">
      
       <img src="images/tram.png" alt="Transportation"/>
       <h3>Transportation</h3>
    </div>
   
    <div class="clearfix"></div>
   </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datasets;