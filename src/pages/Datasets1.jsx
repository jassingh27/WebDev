import React from React;
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Datasets1.css';

const Datasets = () => {
    return (
        <div>
            <Header/>
            <main>
                <div>
                <p className="title">What are you looking for today? </p>
                <table>
                    <tr>
                        <td>
                            <div class="box">
                                <img src="" alt="People" width="220px"/>
                                <div class ="overlay">
                                    <div class="content">
                                        <h2>People</h2>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div class="box">
                                <img src="/src/assets/cloud.png" alt="Cloud" width="220px"/>
                                <div class ="overlay">
                                    <div class="content">
                                        <h2>Sensors</h2>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="container">
                                <div class="text1">People</div>
                                <div class="text2">Property</div>
                            </div>
                        </td>
                        <td>
                            <div class="box">
                                <img src="/src/assets/recycle.png" alt="Recycle" width="220px"/>
                                <div class ="overlay">
                                    <div class="content">
                                        <h2>Environments</h2>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="container">
                                <div class="text3">Sensors</div>
                                <div class="text4">Transportation</div>
                            </div>
                        </td>  
                    </tr>
                    <tr>
                        <td>
                            <div class="box">
                                <img src="/src/assets/house.png" alt="House" width="220px"/>
                                <div class ="overlay">
                                    <div class="content">
                                        <h2>Property</h2>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="container">
                                <div class="text5">Environments</div>
                            </div>
                        </td>
                        <td>
                            <div class="box">
                                <img src="/src/assets/tram.png" alt="Tram" width="220px"/>
                                <div class ="overlay">
                                    <div class="content">
                                        <h2>Transportation</h2>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export const datasetsSearchableContents = [
    "People",
    "Property",
    "Sensors",
    "Transportation",
    "Environments",
  ];

  export default Datasets1;