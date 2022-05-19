import React from 'react';
import About from './About.js';
import Features from './Features.js';
import Hero from './Hero.js';
import Plans from './HomeComponents/Plans.js'
import WhyChoose from './WhyChoose.js';

const Home = () => {



  return (
    <>
      <Hero />
      <Plans />
      <WhyChoose />
      <Features />
      <About />
    </>
  )
}
export default Home