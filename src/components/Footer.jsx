import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.js';
import { FiChevronDown, FiChevronUp, FiArrowRight, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { PiWrenchLight } from 'react-icons/pi';

const Footer = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Our services", path: "/services" },
    { name: "Contact support", path: "/contact" }
  ];

  const policyLinks = [
    { name: "Privacy policy", path: "/privacy-policy" },
    { name: "Terms of service", path: "/terms-of-service" },
    { name: "Refund policy", path: "/refund-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Cookie policy", path: "/cookie-policy" }
  ];

  const displayedServices = showAllServices ? servicesData : servicesData.slice(0, 6);

  return (
    <footer className="bg-slate-950 pt-24 pb-12 font-sans overflow-hidden relative">
      {/* Decorative top blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">

        {/* Footer Top: Brand & Newsletter Vibe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-start">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block group">
              <img
                src="/logo/logo.png"
                alt="Dear Appliance"
                className="h-12 md:h-14 lg:h-16 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
              Providing expert appliance repair solutions with a focus on honesty, speed, and long-term reliability.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 font-bold hover:text-orange-500 hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Repair Services</h4>
            <ul className="grid grid-cols-1 gap-5">
              {displayedServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.slug}`} className="text-slate-400 font-bold hover:text-orange-500 hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-500 capitalize">
                    {service.title.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="text-orange-500 font-black text-[12px] uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors mt-8 group"
            >
              {showAllServices ? (<>Show Less <FiChevronUp /></>) : (<>View All Services <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></>)}
            </button>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Policy Info</h4>
            <ul className="space-y-5">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 font-bold hover:text-orange-500 hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/5">
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <FiMail size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Email Us</p>
              <a href="mailto:info@dearappliance.com" className="text-white font-black text-lg">info@dearappliance.com</a>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <FiMapPin size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
              <p className="text-white font-black text-lg">149 W 36th St. 5th Floor, New York, NY 10018, United States</p>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <FiClock size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Working Hours</p>
              <p className="text-white font-black text-lg">Mon - Sat: 9am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-bold tracking-wide">
            Â© {new Date().getFullYear()} <span className="text-white">Dear Appliance</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
            <PiWrenchLight className="text-orange-500" size={20} />
            <span className="uppercase tracking-widest text-[11px]">Honest Local Repair Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


