import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { FiArrowRight, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { PiWrenchFill } from 'react-icons/pi';

const Services = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Services | Dear Appliance - Expert Repair Services</title>
        <meta name="description" content="View our full range of professional appliance repair services. We fix washing machines, fridges, ACs and more with honesty." />
        <link rel="canonical" href="https://dearappliance.com/services" />
      </Helmet>

      {/* Hero Section - Modern Dark Premium */}
      <section className="relative pt-[200px] pb-32 bg-slate-950 overflow-hidden text-center">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-10" data-aos="fade-down">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-white/90 text-[11px] font-black uppercase tracking-[0.3em]">
              Our Service Directory
            </span>
          </div>
          <h1 className="text-[44px] md:text-[72px] lg:text-[90px] font-black text-white mb-10 leading-[1.05] tracking-tight" data-aos="zoom-out">
            Expert Solutions For <br />
            All Your <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">Home Appliances.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            From essential kitchen gadgets to complex laundry systems, we provide honest, fast, and reliable repair services for all your household devices.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 lg:py-40 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <Link
                to={`/service/${service.slug}`}
                key={service.id}
                className="group relative bg-white rounded-[40px] overflow-hidden p-10 flex flex-col h-full transition-all duration-700 hover:border-orange-500/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-slate-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative z-10 flex-1">
                  <div className="relative w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mb-10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:shadow-orange-500/30">
                    <PiWrenchFill size={36} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-50 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <FiArrowUpRight size={16} />
                    </div>
                  </div>

                  <h3 className="text-[28px] font-black text-slate-950 mb-4 tracking-tight group-hover:text-orange-500 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] font-medium leading-relaxed mb-8 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      <FiCheck className="text-orange-500 text-lg" /> Genuine Spare Parts
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      <FiCheck className="text-orange-500 text-lg" /> Professional Warranty
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-10 flex items-center justify-between border-t border-slate-50">
                  <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-950 transition-all">
                    View Details
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
                    <FiArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Modern Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div className="absolute inset-0">
              <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/10 mb-8">
                <span className="text-orange-500 font-black text-[11px] uppercase tracking-[0.3em]">Quick Response Guarantee</span>
              </div>

              <h3 className="text-[36px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-4xl mb-8">
                Is Your Appliance <span className="text-orange-500 underline decoration-white/20 underline-offset-8 italic">Not Working</span> Properly?
              </h3>

              <p className="text-white/60 font-medium text-lg md:text-xl max-w-2xl mb-12">
                Don't wait! Our expert technicians are ready to restore your appliance to perfect condition with a 100% satisfaction guarantee.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <button
                  onClick={() => openBookingModal()}
                  className="px-12 py-6 bg-orange-500 text-white font-black uppercase tracking-widest text-[14px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
                >
                  Schedule Your Repair Now
                </button>
                <Link
                  to="/contact"
                  className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 font-black uppercase tracking-widest text-[14px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl"
                >
                  Contact Support
                </Link>
              </div>
              <p className="text-white/40 font-black text-[11px] uppercase tracking-[0.5em] mt-12">Premium Repair Services</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

