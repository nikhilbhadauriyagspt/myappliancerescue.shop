import React from 'react';
import { FiSearch, FiSettings, FiCheckCircle } from 'react-icons/fi';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FiSearch size={32} />,
      title: "Request a Quote",
      desc: "Fill out our simple form or call us to get a free, upfront estimate for your appliance repair.",
      color: "blue"
    },
    {
      icon: <FiSettings size={32} />,
      title: "Expert Diagnosis",
      desc: "Our certified technician arrives at your doorstep to perform a thorough diagnostic check.",
      color: "orange"
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: "Fast Repair",
      desc: "We fix the issue using genuine parts and provide a warranty on our service. Total peace of mind.",
      color: "green"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-slate-50 px-5 py-2 rounded-full border border-slate-100 mb-6">
            <span className="text-slate-900 font-black text-[11px] uppercase tracking-[0.2em]">Simple 3-Step Process</span>
          </div>
          <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-tight tracking-tight">
            How We Get Your <span className="text-orange-500">Life Back To Normal.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-[40px] border border-slate-100 hover:border-orange-500/20 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)]" data-aos="fade-up" data-aos-delay={idx * 100}>
              {/* Step Number */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl">
                0{idx + 1}
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 rounded-3xl mb-8 flex items-center justify-center transition-all duration-500
                ${step.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600' : ''}
                ${step.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600' : ''}
                ${step.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600' : ''}
                group-hover:text-white group-hover:shadow-2xl group-hover:scale-110`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-950 mb-4 group-hover:text-orange-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
