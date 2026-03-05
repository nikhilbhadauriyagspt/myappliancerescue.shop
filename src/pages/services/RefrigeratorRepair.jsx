import React from 'react';
import { PiSnowflakeFill, PiThermometerFill, PiGearFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const RefrigeratorRepair = () => {
  const features = [
    {
      title: "Cooling Restoration",
      desc: "Fast diagnostics and deep repair for refrigerators that have lost their cooling power.",
      icon: <PiSnowflakeFill />
    },
    {
      title: "Compressor Overhaul",
      desc: "Industrial-grade repair and factory-standard replacement of faulty refrigerator compressors.",
      icon: <PiGearFill />
    },
    {
      title: "Digital Thermostat",
      desc: "Precision calibration and replacement of high-accuracy temperature sensors and controls.",
      icon: <PiThermometerFill />
    },
    {
      title: "Eco-Friendly Gas",
      desc: "Safe and efficient refrigerant charging using high-grade, eco-friendly gases.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Refrigerator"
      titleAccent="Experts."
      metaTitle="Premium Refrigerator Repair | Same Day Service | Dear Appliance"
      metaDesc="Professional repair for all refrigerator and freezer brands. We fix cooling issues, compressors, and thermostat malfunctions with original parts."
      heroDesc="Keep your food fresh and safe. Our dedicated team provides same-day repair for all major refrigerator and freezer brands at your doorstep."
      image="/service-2.jpg"
      mainDesc="A warm fridge is an emergency. We offer elite diagnostics for cooling failures, compressor noises, and ice buildup. Our technicians carry genuine spare parts to ensure a rapid, permanent fix for your essential kitchen appliance."
      highlights={[
        "Emergency Same-Day Fix",
        "Master Compressor Techs",
        "Genuine Factory Parts",
        "Direct & Honest Quotes"
      ]}
      features={features}
      ctaHeading="Fridge Not Cooling?"
      ctaSubheading="We'll Fix It In 45 Mins."
    />
  );
};

export default RefrigeratorRepair;

