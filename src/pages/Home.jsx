// Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homecover from '../assets/homebanner.jpeg'
import HeaderBackup from '../components/HeaderBackup';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderBackup />
      <main>
        <div>
          <img class="w-full h-auto " src={homecover}></img>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;