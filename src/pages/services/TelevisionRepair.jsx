import React from 'react';
import { PiTelevisionFill, PiSpeakerHighFill, PiLightningFill, PiGearFill } from 'react-icons/pi';
import ServicePageLayout from '../../components/ServicePageLayout';

const TelevisionRepair = () => {
  const features = [
    {
      title: "4K Display Fix",
      desc: "Expert repair for LED backlight failure, screen flickering, and complex panel errors.",
      icon: <PiTelevisionFill />
    },
    {
      title: "Motherboard Service",
      desc: "Resolving power-on failures and motherboard-level electrical malfunctions with precision.",
      icon: <PiLightningFill />
    },
    {
      title: "Acoustic Repair",
      desc: "Professional fix for distorted sound, internal speaker failure, and audio output issues.",
      icon: <PiSpeakerHighFill />
    },
    {
      title: "Smart Connectivity",
      desc: "Solving Wi-Fi signal drops, HDMI port failures, and OS software glitches for all Smart TVs.",
      icon: <PiGearFill />
    }
  ];

  return (
    <ServicePageLayout
      title="Television"
      titleAccent="Specialists."
      metaTitle="Premium Smart TV & LED Repair | Expert Service | My Appliancerescue"
      metaDesc="Professional repair for 4K LED, LCD, and Smart TVs. We fix display issues, power supplies, and audio problems for all major brands."
      heroDesc="Your entertainment, restored. We provide high-precision diagnostics and board-level repair for all major TV brands."
      image="/service-4.jpg"
      mainDesc="Modern TVs require delicate handling and electronic expertise. From backlight replacements to complex chip-level repairs, we focus on restoring crystal-clear picture and sound quality. Our team follows strict anti-static protocols during every on-site repair."
      highlights={[
        "Certified Smart TV Techs",
        "On-Site Board Repair",
        "Premium Panel Parts",
        "Service For All Brands"
      ]}
      features={features}
      ctaHeading="TV Screen Issues?"
      ctaSubheading="Restore Your View Today."
    />
  );
};

export default TelevisionRepair;
