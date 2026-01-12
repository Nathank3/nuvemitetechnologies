import React from 'react';
import HeroCarousel from './HeroCarousel';
import ClientTrustBar from './ClientTrustBar';
import CompanyIntro from './CompanyIntro';
import ProductTeaser from './ProductTeaser';
import ServicesTeaser from './ServicesTeaser';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ClientTrustBar />
      <CompanyIntro />
      <ProductTeaser />
      <ServicesTeaser />
      
    </>
  );
};

export default Home;
