import React from 'react'
import heroimg from '../images/hero-img.PNG';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About page" 
      imgsrc={heroimg} 
      visit="/contact" 
      btnName="Contact Now"
      />
    </>
  )
}

export default About



