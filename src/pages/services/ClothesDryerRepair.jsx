import React from 'react';
import { PiThermometerFill, PiGearFill, PiArrowsClockwiseFill, PiWindFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const ClothesDryerRepair = () => {
  const features = [
    {
      title: "Thermal Restoration",
      desc: "Expert replacement of heating elements and sensors to get your laundry dry in one cycle.",
      icon: <PiThermometerFill />
    },
    {
      title: "Drivetrain Repair",
      desc: "Professional replacement of heavy-duty belts and repair of high-torque drum motors.",
      icon: <PiGearFill />
    },
    {
      title: "Silent Rotation",
      desc: "Precision alignment of rollers and bearings for a smooth, whisper-quiet drying experience.",
      icon: <PiArrowsClockwiseFill />
    },
    {
      title: "Safety Venting",
      desc: "Critical cleaning of exhaust paths to prevent fire hazards and maximize energy efficiency.",
      icon: <PiWindFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Clothes Dryer"
      titleAccent="Specialists."
      metaTitle="Professional Clothes Dryer Repair | Fast Local Service | My Appliancerescue"
      metaDesc="Expert repair for all residential dryer brands. We fix heating issues, replace worn belts, and perform safety vent cleaning."
      heroDesc="Don't let damp clothes pile up. We provide high-performance repair for all dryer types, ensuring your laundry routine never skips a beat."
      image="/service-11.jpg"
      mainDesc="A dryer that won't heat or spin is a major inconvenience. Our dedicated team specializes in restoring heating efficiency and mechanical integrity. We focus on fire-safe operations and energy-saving performance for every major dryer brand."
      highlights={[
        "Certified Dryer Experts",
        "Emergency Same-Day Fix",
        "Original Heavy-Duty Parts",
        "Fire Safety Certification"
      ]}
      features={features}
      ctaHeading="Dryer Not Heating?"
      ctaSubheading="Let The Experts Handle It."
    />
  );
};

export default ClothesDryerRepair;
