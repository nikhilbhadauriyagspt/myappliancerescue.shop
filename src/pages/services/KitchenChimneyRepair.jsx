import React from 'react';
import { PiFanFill, PiGearFill, PiDropFill, PiLightningFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const KitchenChimneyRepair = () => {
  const features = [
    {
      title: "High-Torque Motor",
      desc: "Precision diagnostics and rebuilding of chimney exhaust motors for maximum longevity.",
      icon: <PiFanFill />
    },
    {
      title: "Deep Degreasing",
      desc: "Industrial-grade cleaning of filters and blowers to restore 100% suction power.",
      icon: <PiDropFill />
    },
    {
      title: "Soft-Touch Interface",
      desc: "Expert repair for advanced touchpads, motion sensors, and push-button control panels.",
      icon: <PiLightningFill />
    },
    {
      title: "Aero-Flow Recovery",
      desc: "Comprehensive duct inspection and blockage removal for efficient smoke extraction.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Kitchen Chimney"
      titleAccent="Experts."
      metaTitle="Premium Kitchen Chimney Repair & Cleaning | Dear Appliance"
      metaDesc="Professional repair and industrial cleaning for kitchen exhaust systems. We fix motors, touch panels, and restore full suction."
      heroDesc="Breathe fresh air. Our specialists provide deep cleaning and precision repair for all high-end chimney and exhaust systems."
      image="/service-12.jpg"
      mainDesc="A greasy chimney is both a health risk and a fire hazard. We specialize in deep degreasing and motor optimization to keep your kitchen smoke-free. From sensor issues to noisy blowers, our dedicated team ensures your chimney operates at its peak factory performance."
      highlights={[
        "Industrial Deep Cleaning",
        "Suction Power Guarantee",
        "Original Control Panels",
        "Same-Day Maintenance"
      ]}
      features={features}
      ctaHeading="Chimney Lost Its Suction?"
      ctaSubheading="Restore Freshness Today."
    />
  );
};

export default KitchenChimneyRepair;

