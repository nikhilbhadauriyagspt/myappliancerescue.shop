import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiPlus, FiCheck, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { PiWrenchFill, PiClockFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const ServicePageLayout = ({
  title,
  titleAccent,
  metaTitle,
  metaDesc,
  heroDesc,
  image,
  mainDesc,
  highlights = [],
  features = [],
  ctaHeading,
  ctaSubheading
}) => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{metaTitle || `${title} Repair | My Appliancerescue`}</title>
        <meta name="description" content={metaDesc} />
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
            {title} <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">{titleAccent || 'Repair.'}</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 lg:py-40 bg-white relative z-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Visual Side - Premium Frame (No Heavy Shadows) */}
            <div className="relative" data-aos="fade-right">
              <div className="p-4 bg-slate-50 rounded-[60px] border border-slate-100 relative z-10">
                <div className="rounded-[50px] overflow-hidden">
                  <img
                    src={image}
                    className="w-full h-[500px] md:h-[750px] object-cover transition-transform duration-1000 hover:scale-105"
                    alt={title}
                  />
                </div>
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-orange-500 text-white p-10 rounded-[40px] shadow-2xl shadow-orange-500/20">
                <PiClockFill size={48} className="mb-4" />
                <div className="text-sm font-black uppercase tracking-widest opacity-80">Fast Response</div>
                <div className="text-2xl font-black italic">Under 45 Mins</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-12" data-aos="fade-left">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-blue-50 px-5 py-2 rounded-full border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">Premium Solutions</span>
                </div>
                <h2 className="text-[40px] md:text-[60px] font-black text-slate-950 leading-[1.05] tracking-tight">
                  Professional Care for <br />
                  <span className="text-orange-500">Your Appliance.</span>
                </h2>
              </div>

              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                {mainDesc}
              </p>

              <div className="grid gap-6 bg-slate-50 p-12 rounded-[50px] border border-slate-100">
                <h4 className="text-slate-950 font-black text-xl mb-2 uppercase tracking-tight">What's Included:</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group/list">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-500 transition-all shadow-sm group-hover/list:bg-orange-500 group-hover/list:text-white">
                        <FiCheck size={20} strokeWidth={3} />
                      </div>
                      <span className="text-slate-950 font-bold text-[16px] tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openBookingModal(title)}
                  className="w-full sm:w-auto px-12 py-6 bg-slate-950 text-white rounded-[24px] font-black uppercase tracking-widest text-[14px] hover:bg-orange-500 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group"
                >
                  Book Repair Now <FiPlus size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - Specialized expertise */}
      {features.length > 0 && (
        <section className="py-24 lg:py-40 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200 mb-6 shadow-sm">
                <span className="text-slate-950 font-black text-[11px] uppercase tracking-[0.35em]">Specialized Help</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 tracking-tight leading-tight mb-6">
                Our Specific <br /><span className="text-orange-500">Expertise.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((v, i) => (
                <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 flex flex-col items-center text-center group hover:border-orange-500/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-700" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="w-20 h-20 rounded-[32px] bg-slate-50 text-slate-900 flex items-center justify-center text-4xl mb-10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-700 shadow-sm group-hover:scale-110">
                    {v.icon || <PiWrenchFill />}
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight group-hover:text-orange-500 transition-colors leading-tight">{v.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-[16px]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner - Premium Glassmorphism */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div className="absolute inset-0">
              <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/10 mb-8 text-orange-500 font-black text-[11px] uppercase tracking-[0.3em]">
                Guaranteed Results
              </div>

              <h3 className="text-[36px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-4xl mb-12">
                {ctaHeading || 'Restore Your Appliance To Perfect Condition.'}
                {ctaSubheading && <br />}
                {ctaSubheading && <span className="text-orange-500 italic underline decoration-white/10 underline-offset-8">{ctaSubheading}</span>}
              </h3>

              <div className="flex justify-center">
                <button
                  onClick={() => openBookingModal(title)}
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-[14px] hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl shadow-orange-500/20 active:scale-95"
                >
                  Schedule Your Repair Now <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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

export default ServicePageLayout;
