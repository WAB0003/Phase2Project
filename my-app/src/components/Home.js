import React from 'react';
import './Home.css'
import logo from './Super-Smash-Bros.-Logo-PNG-Pic (1).png'


const Home = () => {
    return (
      <div className="homeBG" style={{paddingTop: "6em"}}>
        <img className='SSLogo' src={logo} alt="image"/>
        <h1 className='homeTitle'>Character Portal</h1>

      </div>
    );
  }
  
  export default Home;
