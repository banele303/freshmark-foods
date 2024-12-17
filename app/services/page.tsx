"use client"
import React from 'react';

import Footer from '../components/Footer';
import ServicesHero from './service-hero';
import ServicesList from './service-list';
import FRQSection from '../products/FRQ';
import ContactButtons from '../components/ui/contact-buttons';


export default function Home() {
  return (
    <main>

  <ServicesHero/>
  <ServicesList/>
  <ContactButtons/>
  <FRQSection/>
  <Footer/>
    </main>
  );
}

