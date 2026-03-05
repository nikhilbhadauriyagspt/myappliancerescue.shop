import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dear Appliance - Trusted Home Appliance Repair Services</title>
        <meta name="description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified specialists, same-day service, fair pricing." />
        <link rel="canonical" href="https://dearappliance.com/" />

        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Dear Appliance - Trusted Home Appliance Repair Services" />
        <meta property="og:description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified specialists, same-day service, fair pricing." />
        <meta property="og:image" content="https://dearappliance.com/logo/logo.png" />
        <meta property="og:url" content="https://dearappliance.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <HeroSection />
      <Highlights />
      <About />
      <ServicesSection />
      <HowItWorksSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;

