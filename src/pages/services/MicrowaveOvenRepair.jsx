import React from 'react';
import { PiLightningFill, PiWaveformFill, PiClockFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const MicrowaveOvenRepair = () => {
  const features = [
    {
      title: "Magnetron Power",
      desc: "Expert replacement of high-grade magnetrons to restore heating functionality instantly.",
      icon: <PiWaveformFill />
    },
    {
      title: "Smart Panel Repair",
      desc: "Precision restoration of touchpads, digital displays, and complex sensor errors.",
      icon: <PiLightningFill />
    },
    {
      title: "High-Voltage Safety",
      desc: "Certified diagnostics and repair for HV diodes, capacitors, and internal transformers.",
      icon: <PiShieldCheckFill />
    },
    {
      title: "Cycle Calibration",
      desc: "Accurate repair for mechanical timers and internal thermal sensors for perfect cooking.",
      icon: <PiClockFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Microwave Oven"
      titleAccent="Techs."
      metaTitle="Professional Microwave Repair Service | Fast & Safe | My Appliancerescue"
      metaDesc="Expert microwave repair for all premium brands. We fix heating issues, magnetrons, and control panels with a safety-first approach."
      heroDesc="Quick meals, zero hassle. Our certified experts provide rapid and safe repair for all types of microwave and convection ovens."
      image="/service-8.jpg"
      mainDesc="Microwave repairs require technical precision and a strict focus on electrical safety. We specialize in resolving heating failures, sparking issues, and keypad malfunctions. Our team uses only manufacturer-approved components to ensure your appliance remains safe for your family."
      highlights={[
        "Safety-Certified Techs",
        "Original Magnetron Fix",
        "Prompt 45-Min Arrival",
        "Full Safety Inspection"
      ]}
      features={features}
      ctaHeading="Microwave Not Heating?"
      ctaSubheading="Get A Safe, Fast Fix Now."
    />
  );
};

export default MicrowaveOvenRepair;
