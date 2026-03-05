import React from 'react';
import { PiDropFill, PiGearFill, PiWavesFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const WaterPurifierRepair = () => {
  const features = [
    {
      title: "Filter Rejuvenation",
      desc: "Precision replacement of sediment, pre-carbon, and activated carbon filters for pure water.",
      icon: <PiDropFill />
    },
    {
      title: "BOOSTER Pump Care",
      desc: "Expert repair and high-pressure motor replacement for RO systems to maintain water flow.",
      icon: <PiGearFill />
    },
    {
      title: "Mineral TDS Logic",
      desc: "Scientific adjustment of TDS and mineral controllers for the healthiest drinking water.",
      icon: <PiWavesFill />
    },
    {
      title: "UV/UF Sterilization",
      desc: "Rigorous testing and replacement of UV lamps to ensure 100% pathogen-free output.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Water Purifier"
      titleAccent="Specialists."
      metaTitle="RO & Water Purifier Repair | Pure Drinking Water | Dear Appliance"
      metaDesc="Professional RO and UV water purifier repair. We handle filter changes, membrane checks, and TDS adjustments with genuine parts."
      heroDesc="Health starts with water. We provide elite maintenance and rapid repair for all high-end RO and UV purification systems."
      image="/service-10.jpg"
      mainDesc="Pure water is non-negotiable. Our dedicated specialists provide comprehensive membrane health checks, high-pressure pump repairs, and TDS balancing. We ensure your family receives the highest standard of purified water by using only food-grade components."
      highlights={[
        "Pure Water Certification",
        "Original RO membranes",
        "Precision TDS Balancing",
        "Same-Day Filter Swap"
      ]}
      features={features}
      ctaHeading="Purifier Tasting Different?"
      ctaSubheading="Restore Purity Today."
    />
  );
};

export default WaterPurifierRepair;

