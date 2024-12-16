"use client"
import React from 'react';

import Footer from '../components/Footer';
import ServicesHero from './service-hero';
import ServicesList from './service-list';


export default function Home() {
  return (
    <main>

  <ServicesHero/>
  <ServicesList/>
  <Footer/>
    </main>
  );
}

