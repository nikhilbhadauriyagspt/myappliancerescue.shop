import React from 'react';
import { PiFireFill, PiLightningFill, PiThermometerFill, PiGearFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const OvenStoveRepair = () => {
  const features = [
    {
      title: "Flame Optimization",
      desc: "Precision cleaning and adjustment of gas burners to ensure a perfect, blue flame.",
      icon: <PiFireFill />
    },
    {
      title: "Spark Ignition Fix",
      desc: "Expert restoration of auto-ignition systems and electric stove starters for instant lighting.",
      icon: <PiLightningFill />
    },
    {
      title: "Heat Precision",
      desc: "Master calibration of oven heating elements and digital thermostats for accurate baking.",
      icon: <PiThermometerFill />
    },
    {
      title: "Leak Prevention",
      desc: "Rigorous gas line testing and pressure checks to ensure a 100% safe cooking environment.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Oven & Stove"
      titleAccent="Care."
      metaTitle="Expert Oven & Gas Stove Repair | Safety Certified | My Appliancerescue"
      metaDesc="Professional repair for gas stoves, hobs, and electric ovens. We fix ignition, burners, and thermostats with a focus on safety."
      heroDesc="Master your kitchen again. We provide elite repair and safety certification for all gas hobs, ranges, and convection ovens."
      image="/service-9.jpg"
      mainDesc="Cooking range issues can be dangerous. We specialize in flame consistency, ignition reliability, and oven temperature accuracy. Our safety-first approach includes thorough gas leak detection and electrical grounding checks for every service visit."
      highlights={[
        "Gas Safety Specialists",
        "Blue-Flame Calibration",
        "Original Ignition Parts",
        "Prompt Doorstep Support"
      ]}
      features={features}
      ctaHeading="Cooking Performance Dropped?"
      ctaSubheading="Restore Your Kitchen's Heart."
    />
  );
};

export default OvenStoveRepair;
