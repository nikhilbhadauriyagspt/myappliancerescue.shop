import React from 'react';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { PiWrenchFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const ServicesSection = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden" id="services">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-[1800px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">
                Professional Solutions
              </span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight">
              Our Premium <span className="text-orange-500">Repair Services.</span>
            </h2>
          </div>
          <div className="lg:pb-2" data-aos="fade-left">
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
              From high-end kitchen appliances to heavy-duty laundry systems, we handle it all.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <Link 
              key={service.id}
              to={`/service/${service.slug}`}
              className="group bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 transition-all duration-700 hover:border-orange-500/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Service Icon Box */}
              <div className="relative z-10 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-700 mb-10">
                 <PiWrenchFill size={36} />
                 
                 {/* Floating Arrow Icon */}
                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-50 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <FiArrowUpRight size={16} />
                 </div>
              </div>

              {/* Service Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-[26px] font-black text-slate-950 group-hover:text-orange-500 transition-colors mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[16px] text-slate-500 font-medium leading-relaxed line-clamp-3 mb-8">
                  {service.shortDesc}
                </p>
              </div>

              {/* View More Link */}
              <div className="relative z-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                 <span className="text-[12px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                   Read Details
                 </span>
                 <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">
                   <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
           <Link 
             to="/services"
             className="inline-flex items-center gap-4 px-12 py-5 bg-white border border-slate-200 text-slate-950 font-black text-[14px] uppercase tracking-widest rounded-2xl hover:bg-slate-950 hover:text-white transition-all shadow-xl group"
           >
             <span>Explore All Services</span>
             <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        {/* New Premium CTA Banner */}
        <div className="mt-32 relative group rounded-[60px] overflow-hidden shadow-2xl" data-aos="zoom-in">
           <div className="absolute inset-0">
             <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
             <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
           </div>

           <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/10 mb-8">
                <span className="text-orange-500 font-black text-[11px] uppercase tracking-[0.3em]">Quick Response Guarantee</span>
              </div>
              
              <h3 className="text-[36px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-4xl mb-8">
                 Experience The Most <span className="text-orange-500 underline decoration-white/20 underline-offset-8">Reliable</span> Repair In Town.
              </h3>
              
              <p className="text-white/60 font-medium text-lg md:text-xl max-w-2xl mb-12">
                 Your local experts for all appliance needs. We bring your broken appliances back to life with a 100% satisfaction guarantee and honest, professional service.
              </p>              
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <button 
                  onClick={() => openBookingModal()}
                  className="px-12 py-6 bg-orange-500 text-white font-black uppercase tracking-widest text-[14px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
                >
                  Book Priority Repair
                </button>
                <Link 
                  to="/contact" 
                  className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 font-black uppercase tracking-widest text-[14px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl"
                >
                  Contact Support
                </Link>
              </div>
           </div>

           {/* Decorative elements */}
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
