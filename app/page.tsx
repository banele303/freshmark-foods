"use client"
import React from 'react';
import FeaturedProducts from './components/Featured-products';
import TrendingIngredients from './components/TrendingIngredients';

import { OurStorySection } from './components/ui/our-story';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MainSlider from './components/ui/main-slider';
import ContactButtons from './components/ui/contact-buttons';


export default function Home() {
  return (
    <main>
      <MainSlider/>
      <OurStorySection/>
     <FeaturedProducts/>

<TrendingIngredients/>
<ContactButtons/>
<FAQ/>
<Footer/>
    </main>
  );
}

