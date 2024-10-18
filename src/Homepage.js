// src/HomePage.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Lead from './components/Lead';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import ContactUs from './components/ContactUs';
import Ratings from './components/Ratings';
import Partners from './components/Partners';

const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Lead />
    <Ratings />
    <AboutUs />
    <Testimonials />
    <Lead />
    <ContactUs />
    <Footer />
   </>
  );
};

export default HomePage;
