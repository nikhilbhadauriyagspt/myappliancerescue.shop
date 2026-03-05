import React from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { PiWrenchFill, PiShieldCheckFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="about">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">

          {/* Visual Side - Grid of 4 Images, No Shadows */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[32px] border border-slate-100">
                <img
                  src="/public/service-1.jpg"
                  className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-1000"
                  alt="Repair Service 1"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-slate-100 mt-8">
                <img
                  src="/public/service-2.jpg"
                  className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-1000"
                  alt="Repair Service 2"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-slate-100 -mt-8">
                <img
                  src="/public/service-7.jpg"
                  className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-1000"
                  alt="Repair Service 3"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-slate-100">
                <img
                  src="/public/service-8.jpg"
                  className="w-full h-full object-cover aspect-square transform hover:scale-105 transition-transform duration-1000"
                  alt="Repair Service 4"
                />
              </div>
            </div>

            {/* Simple Trust Badge (No Shadow, No Fake Years) */}
            <div className="mt-8 flex items-center gap-4 bg-slate-50 p-6 rounded-[24px] border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <FiCheckCircle size={24} />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900 leading-none">Local & Dedicated</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">Your Trusted Neighborhood Team</div>
              </div>
            </div>
          </div>

          {/* Text Side - Kept same as requested */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-orange-50 px-5 py-2 rounded-full border border-orange-100">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.2em]">
                  Know More About Us
                </span>
              </div>

              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-slate-950 leading-[1.05] tracking-tight">
                Reliable Experts For Your <span className="text-orange-500">Home Appliances.</span>
              </h2>

              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                We are a new, dedicated team providing honest, fast, and high-quality appliance repairs. Our mission is to build trust through every single fix and restore comfort to your home.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-slate-50 text-orange-500 rounded-3xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 mb-6">
                  <PiWrenchFill size={32} />
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-3">Honest Diagnostics</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  We provide clear explanations and upfront pricing before any work begins.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-slate-50 text-blue-500 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 mb-6">
                  <PiShieldCheckFill size={32} />
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-3">Guaranteed Fixes</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  Every repair is backed by our professional service warranty for your peace of mind.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 px-12 py-5 bg-slate-950 text-white font-black text-[14px] uppercase tracking-widest rounded-2xl hover:bg-orange-500 transition-all group"
              >
                <span>Read Our Full Story</span>
                <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
