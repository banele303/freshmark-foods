"use client"
import React from 'react';
import HeroSlider from './hero-slider';
import AboutSection from './about-us';
import ProductsSection from './products';
import ServicesComparison from './service-components';
import FRQSection from './FRQ';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main>

  <HeroSlider/>
  <AboutSection/>
  <ProductsSection/>
  <ServicesComparison/>
  <FRQSection/>
  <Footer/>
    </main>
  );
}

