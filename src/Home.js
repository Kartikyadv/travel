import React from 'react';
import logo from "../src/images/logo.png";
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common 
      name='Travel the world with '
      imgsrc={logo}
      visit='/service'
      btname='Get Started'
    />
    </>
  )
}

export default Home