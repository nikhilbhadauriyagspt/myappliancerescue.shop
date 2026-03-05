import React from 'react';
import { PiWrenchFill, PiGearFill, PiMagnifyingGlassFill, PiShieldCheckFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const OtherAppliances = () => {
  const features = [
    {
      title: "Master Diagnostics",
      desc: "Deep-level troubleshooting for any household appliance to pinpoint the exact failure point.",
      icon: <PiMagnifyingGlassFill />
    },
    {
      title: "Component Integrity",
      desc: "Surgical replacement of faulty internal parts to restore original performance levels.",
      icon: <PiGearFill />
    },
    {
      title: "Full Safety Audit",
      desc: "Complete electrical grounding and operational safety check for total peace of mind.",
      icon: <PiShieldCheckFill />
    },
    {
      title: "Multi-Brand Support",
      desc: "Expertise across a vast range of niche household devices and specialty electronics.",
      icon: <PiWrenchFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Miscellaneous"
      titleAccent="Appliances."
      metaTitle="Specialty Appliance Repair | General Expert Service | Dear Appliance"
      metaDesc="Professional repair for all types of household appliances. Master diagnostics and genuine parts replacement for any device."
      heroDesc="If it's broken, we can fix it. From niche kitchen gadgets to specialty home devices, our experts handle the jobs others won't."
      image="/service-6.jpg"
      mainDesc="Don't throw away your favorite devices just yet. We provide versatile repair solutions for a wide variety of household appliances. Our mission is to provide an honest, one-stop destination for all your home technical needs, no matter how unique the appliance."
      highlights={[
        "Master-Level Versatility",
        "No-Fix No-Fee Policy",
        "Transparent Labor Rates",
        "Genuine Replacement Parts"
      ]}
      features={features}
      ctaHeading="Something Else Broken?"
      ctaSubheading="Our Experts Are Ready."
    />
  );
};

export default OtherAppliances;

