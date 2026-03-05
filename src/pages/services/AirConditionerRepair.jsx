import React from 'react';
import { PiWindFill, PiGearFill, PiThermometerFill, PiDropFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const AirConditionerRepair = () => {
  const features = [
    {
      title: "Performance Tune-Up",
      desc: "Comprehensive restoration of cooling efficiency for split, window, and central AC systems.",
      icon: <PiWindFill />
    },
    {
      title: "Precision Gas Refill",
      desc: "Safe, factory-standard refrigerant charging to ensure your unit cools like new.",
      icon: <PiThermometerFill />
    },
    {
      title: "Advanced Electronics",
      desc: "Deep diagnostics and precision repair for inverter PCB boards and control systems.",
      icon: <PiGearFill />
    },
    {
      title: "Antibacterial Clean",
      desc: "Professional-grade deep cleaning of coils and filters for healthier, fresher air.",
      icon: <PiDropFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Air Conditioner"
      titleAccent="Experts."
      metaTitle="Premium AC Repair & Service | Same Day Support | My Appliancerescue"
      metaDesc="Professional AC repair and maintenance for all major brands. We handle gas refilling, PCB diagnostics, and deep antibacterial cleaning."
      heroDesc="Stay cool without the stress. Our dedicated team provides expert repair, precision maintenance, and factory-standard gas filling at your doorstep."
      image="/service-7.jpg"
      mainDesc="A malfunctioning AC can make life unbearable. We specialize in rapid diagnostics and long-term solutions for all cooling issues. From minor operational noises to complex compressor failures, our technicians use state-of-the-art tools to restore your comfort immediately."
      highlights={[
        "Specialized Inverter Techs",
        "Prompt 45-Min Response",
        "Fixed & Honest Pricing",
        "Premium Service Warranty"
      ]}
      features={features}
      ctaHeading="AC Lost Its Cool?"
      ctaSubheading="We'll Restore It Today."
    />
  );
};

export default AirConditionerRepair;
