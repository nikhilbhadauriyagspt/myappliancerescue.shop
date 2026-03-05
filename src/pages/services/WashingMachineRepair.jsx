import React from 'react';
import { PiDropFill, PiGearFill, PiLightningFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const WashingMachineRepair = () => {
  const features = [
    {
      title: "Torque Engine Fix",
      desc: "Expert restoration of high-torque motors to ensure smooth, powerful spinning cycles.",
      icon: <PiGearFill />
    },
    {
      title: "Hydro-Seal Tech",
      desc: "Permanent solutions for water leakage, door seal failures, and drainage blockages.",
      icon: <PiDropFill />
    },
    {
      title: "Digital Logic Repair",
      desc: "Master diagnostics for control boards, touch interfaces, and digital error codes.",
      icon: <PiLightningFill />
    },
    {
      title: "Hygiene Sterilization",
      desc: "Deep industrial drum cleaning to remove mold, bacteria, and restore original freshness.",
      icon: <PiShieldCheckFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Washing Machine"
      titleAccent="Experts."
      metaTitle="Premium Washing Machine Repair | Fast & Expert | My Appliancerescue"
      metaDesc="Get your washing machine fixed today. We repair all front-load and top-load brands with original parts and elite care."
      heroDesc="Laundry simplified. We provide rapid, honest, and high-performance repair for all washing machine types right at your doorstep."
      image="/service-1.jpg"
      mainDesc="Whether it's a high-end front loader or a classic top loader, mechanical failure can stop your day. We specialize in resolving motor issues, water intake failures, and electronics glitches. Our dedicated team uses only factory-original parts for a guaranteed long-term fix."
      highlights={[
        "Same-Day Priority Visits",
        "Original Factory Parts",
        "No-Mess Service Policy",
        "Certified Tech Support"
      ]}
      features={features}
      ctaHeading="Is Your Machine Leaking?"
      ctaSubheading="We'll Fix It Permanently."
    />
  );
};

export default WashingMachineRepair;
