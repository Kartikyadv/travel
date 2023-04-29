import React from 'react';
import logo from "../src/images/logo2.jfif";
import Common from './Common';

const About = () => {
  return (
    <>
    <Common 
      name='Welcome to About page'
      imgsrc={logo}
      visit='/contact'
      btname='Contact Now'
    />
    </>
  )
}

export default About