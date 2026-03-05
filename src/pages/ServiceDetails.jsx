import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FiArrowLeft, FiCheck, FiShield, FiClock, FiArrowRight, FiPlus, FiArrowUpRight } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';
import { PiWrenchFill, PiClockFill } from 'react-icons/pi';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.slug === id || s.id === parseInt(id));
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <Helmet>
          <title>Service Not Found - My Appliancerescue</title>
        </Helmet>
        <div className="text-center px-6">
          <h2 className="text-8xl font-black text-slate-950 mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-black uppercase tracking-[0.3em] text-sm">Service Not Found</p>
          <Link to="/services" className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl">
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>{service.title} | My Appliancerescue - Professional Repair</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://myappliancerescue.shop/service/${service.slug}`} />
      </Helmet>

      {/* Hero Section - Modern Dark Premium */}
      <section className="relative pt-[200px] pb-32 bg-slate-950 overflow-hidden text-center">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-10 text-white/80 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all group"
          >
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform text-orange-500" /> Back to All Services
          </Link>
          <h1 className="text-[44px] md:text-[72px] lg:text-[90px] font-black text-white mb-10 leading-[1.05] tracking-tight" data-aos="zoom-out">
            {service.title} <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">Repair.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 lg:py-40 bg-white relative z-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Visual Side - Premium Frame */}
            <div className="relative" data-aos="fade-right">
              <div className="p-4 bg-slate-50 rounded-[60px] border border-slate-100 relative z-10">
                <div className="rounded-[50px] overflow-hidden">
                  <img
                    src={service.image}
                    className="w-full h-[500px] md:h-[750px] object-cover transition-transform duration-1000 hover:scale-105"
                    alt={service.title}
                  />
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-white p-10 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-50 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/20">
                  <FiShield size={32} />
                </div>
                <div>
                  <p className="text-slate-950 font-black text-xl leading-none">Genuine Parts</p>
                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">100% Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-12" data-aos="fade-left">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-blue-50 px-5 py-2 rounded-full border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">Premium Service</span>
                </div>
                <h2 className="text-[40px] md:text-[60px] font-black text-slate-950 leading-[1.05] tracking-tight">
                  Expert Solutions For <br />
                  <span className="text-orange-500">Your Appliance.</span>
                </h2>
              </div>

              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                {service.longDesc}
              </p>

              {/* Features List */}
              <div className="grid gap-6 bg-slate-50 p-12 rounded-[50px] border border-slate-100">
                <h4 className="text-slate-950 font-black text-xl mb-2 uppercase tracking-tight">Key Features:</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {(service.features || []).map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group/list">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-500 transition-all shadow-sm group-hover/list:bg-orange-500 group-hover/list:text-white">
                        <FiCheck size={20} strokeWidth={3} />
                      </div>
                      <span className="text-slate-950 font-bold text-[16px] tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row items-center gap-10 pt-6">
                <button
                  onClick={() => openBookingModal(service.title)}
                  className="w-full sm:w-auto px-12 py-6 bg-slate-950 text-white rounded-[24px] font-black uppercase tracking-widest text-[14px] hover:bg-orange-500 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group"
                >
                  Book Service Now <FiPlus size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-3xl border border-slate-100 flex items-center justify-center text-orange-500 bg-white shadow-lg">
                    <PiClockFill size={32} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-2">Response Time</p>
                    <p className="text-xl font-black text-slate-950 leading-none">Within 2 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner - Premium Glassmorphism */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div className="absolute inset-0">
              <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
              <h2 className="text-[36px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-4xl mb-12">
                Restore Your Appliance To <br />
                <span className="text-orange-500 italic underline decoration-white/10 underline-offset-8">Perfect Condition.</span>
              </h2>

              <div className="flex justify-center">
                <button
                  onClick={() => openBookingModal(service.title)}
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-[14px] hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl shadow-orange-500/20 active:scale-95"
                >
                  Book Your Professional Repair <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
