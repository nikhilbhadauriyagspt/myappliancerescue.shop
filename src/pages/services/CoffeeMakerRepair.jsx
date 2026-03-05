import React from 'react';
import { PiCoffeeFill, PiThermometerFill, PiGearFill, PiDropFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const CoffeeMakerRepair = () => {
  const features = [
    {
      title: "Brew Temperature",
      desc: "Internal boiler and heating element calibration for the perfect, consistent brew.",
      icon: <PiThermometerFill />
    },
    {
      title: "High-Pressure Pump",
      desc: "Repair and replacement of precision pumps to ensure optimal extraction levels.",
      icon: <PiGearFill />
    },
    {
      title: "Professional Descaling",
      desc: "Deep molecular cleaning to remove stubborn mineral buildup and restore pure flavor.",
      icon: <PiCoffeeFill />
    },
    {
      title: "Seal & Gasket Care",
      desc: "Fixing internal pressure leaks and drips with high-grade, food-safe replacement parts.",
      icon: <PiDropFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Coffee Maker"
      titleAccent="Care."
      metaTitle="Expert Coffee Machine Repair | Home & Cafe Support | Dear Appliance"
      metaDesc="Professional coffee maker repair for all premium brands. We fix heating, pressure pumps, and offer deep descaling."
      heroDesc="Your morning cup matters. We provide specialized repair and maintenance for high-end home and commercial brewing systems."
      image="/service-5.jpg"
      mainDesc="Whether it's an espresso machine or a standard brewer, consistency is key. We diagnose pressure issues, temperature fluctuations, and flow blockages to ensure every cup meets professional standards. Honest service for true coffee lovers."
      highlights={[
        "Precision Brew Calibration",
        "Premium Parts Only",
        "Home & Office Support",
        "Flavor-First Philosophy"
      ]}
      features={features}
      ctaHeading="Machine Malfunctioning?"
      ctaSubheading="Restore Your Perfect Brew."
    />
  );
};

export default CoffeeMakerRepair;

