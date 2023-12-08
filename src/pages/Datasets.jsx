import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Datasets.css';

const Datasets = () => {
  return (
    <div>
      <Header />
      <main>
        <div>
          <p className='title'>What are you looking for today?</p>
          <table>
            <tr>
              <td><img src="src/assets/people.png" alt="People" width="220px" /></td>
              <td></td>
              <td><img src="src/assets/cloud.png" alt="Cloud" width="220px" /></td>
            </tr>
            <tr>
              <td>
                <div class="container">
                  <div class="table_top">People</div>
                  <div class="table_bottom">Property</div>
                </div>
              </td>
              <td><img src="src/assets/recycle.png" alt="Recycle" width="220px" /></td>
              <td> <div class="container">
                <div class="table_top">Sensors</div>
                <div class="table_bottom">Transportation</div>
              </div></td>
            </tr>
            <tr>
              <td><img src="src/assets/house.png" alt="House" width="220px" /></td>
              <td><div class="container">
                <div class="table_top">Environments</div>
              </div></td>
              <td><img src="src/assets/tram.png" alt="Tram" width="220px" /></td>
            </tr>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datasets;