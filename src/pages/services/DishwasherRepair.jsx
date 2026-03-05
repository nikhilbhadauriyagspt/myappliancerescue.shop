import React from 'react';
import { PiDropFill, PiGearFill, PiThermometerFill, PiWavesFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const DishwasherRepair = () => {
  const features = [
    {
      title: "Drainage Logistics",
      desc: "Complete clearing of sophisticated drainage paths and high-efficiency pump repair.",
      icon: <PiDropFill />
    },
    {
      title: "Wash Motor Service",
      desc: "Professional diagnostics for main circulation motors to ensure powerful cleaning cycles.",
      icon: <PiGearFill />
    },
    {
      title: "Thermal Drying Fix",
      desc: "Precision replacement of heating elements and fans for spot-free, dry dishes.",
      icon: <PiThermometerFill />
    },
    {
      title: "Seal Integrity",
      desc: "Detecting and resolving micro-leaks in door gaskets and internal plumbing systems.",
      icon: <PiWavesFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Dishwasher"
      titleAccent="Solutions."
      metaTitle="Premium Dishwasher Repair | Fast & Reliable | Dear Appliance"
      metaDesc="Professional dishwasher repair for all major brands. We fix drainage issues, leaks, and heating problems with original parts."
      heroDesc="Spotless dishes, zero effort. Our experts provide rapid, reliable repair for all built-in, drawer, and portable dishwasher units."
      image="/service-3.jpg"
      mainDesc="A leaking or loud dishwasher can disrupt your entire kitchen. We focus on restoring full cleaning power and whisper-quiet operation. Our dedicated team uses advanced diagnostic tools to find the root cause, from blocked spray arms to faulty control boards."
      highlights={[
        "Certified Kitchen Experts",
        "Original Factory Pumps",
        "No-Mess Service Policy",
        "100% Peace of Mind"
      ]}
      features={features}
      ctaHeading="Dishwasher Leaking?"
      ctaSubheading="Get A Permanent Fix Today."
    />
  );
};

export default DishwasherRepair;

