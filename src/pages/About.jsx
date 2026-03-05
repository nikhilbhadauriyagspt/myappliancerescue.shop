import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiShield, FiHeart, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { PiWrenchFill, PiShieldCheckFill, PiClockFill, PiHandHeartFill, PiUsersThreeFill, PiLightbulbFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | My Appliancerescue - Our Mission & Team</title>
        <meta name="description" content="Learn more about My Appliancerescue. We are a dedicated local team providing honest and professional home appliance repair services." />
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
              Our Professional Story
            </span>
          </div>
          <h1 className="text-[44px] md:text-[72px] lg:text-[90px] font-black text-white mb-10 leading-[1.05] tracking-tight" data-aos="zoom-out">
            Making Home Repair <br />
            Simple, Fast & <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">Honest.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            My Appliancerescue was founded on a simple belief: getting your home appliances fixed shouldn't be a source of stress. We're a new, dedicated team here to provide clarity and professional speed.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">

            {/* Visual Side - Grid Layout (No Shadows) */}
            <div className="relative" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-[40px] overflow-hidden border border-slate-100">
                    <img src="/public/service-1.jpg" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-110" alt="Repair 1" />
                  </div>
                  <div className="rounded-[40px] overflow-hidden border border-slate-100">
                    <img src="/public/service-2.jpg" className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-110" alt="Repair 2" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="rounded-[40px] overflow-hidden border border-slate-100">
                    <img src="/public/service-7.jpg" className="w-full aspect-square object-cover transition-transform duration-1000 hover:scale-110" alt="Repair 3" />
                  </div>
                  <div className="rounded-[40px] overflow-hidden border border-slate-100">
                    <img src="/public/service-8.jpg" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-110" alt="Repair 4" />
                  </div>
                </div>
              </div>

              {/* Float Badge - Local & Honest */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] flex flex-col items-center text-center max-w-[240px]">
                <div className="w-16 h-16 rounded-3xl bg-orange-500 text-white flex items-center justify-center mb-4 shadow-xl shadow-orange-500/20">
                  <FiCheckCircle size={32} />
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-1">Local & Dedicated</h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Neighborhood Trusted</p>
              </div>
            </div>

            <div className="space-y-12" data-aos="fade-left">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-blue-50 px-5 py-2 rounded-full border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">Our Values</span>
                </div>
                <h2 className="text-[40px] md:text-[60px] font-black text-slate-950 leading-[1.05] tracking-tight">
                  A Dedicated Team With <br /> <span className="text-orange-500">Unmatched Standards.</span>
                </h2>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  As a locally-owned business, we understand the importance of a functional home. When your fridge stops cooling or your washer leaks, it disrupts your entire life. We built My Appliancerescue to be the reliable expert you can count on.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <PiShieldCheckFill className="text-blue-500" />, title: "Quality First", text: "We never cut corners. If it's not perfect, it's not finished.", color: "bg-blue-50" },
                  { icon: <PiClockFill className="text-orange-500" />, title: "Prompt Service", text: "We value your schedule. Fast response is our goal.", color: "bg-orange-50" }
                ].map((item, i) => (
                  <div key={i} className={`p-10 ${item.color} rounded-[40px] space-y-6 border border-slate-100 group transition-all duration-500`}>
                    <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-2xl font-black text-slate-950">{item.title}</h4>
                    <p className="text-[15px] text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars of Service */}
          <div className="space-y-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-slate-50 px-5 py-2 rounded-full border border-slate-100 mb-6">
                <span className="text-slate-900 font-black text-[11px] uppercase tracking-[0.35em]">The Pillars Of Our Success</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 tracking-tight leading-tight mb-6">The Rules We Live By.</h2>
              <p className="text-slate-500 text-xl font-medium">Professional standards we uphold every single day to ensure your 100% satisfaction.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <PiUsersThreeFill />,
                  title: "Community Focused",
                  desc: "We live and work right here in your community. Every customer is a neighbor, and we treat you like one.",
                  color: "bg-blue-50 text-blue-600",
                  hover: "group-hover:bg-blue-600"
                },
                {
                  icon: <PiLightbulbFill />,
                  title: "Diagnostic Clarity",
                  desc: "We don't guess. We use professional diagnostic tools to find the root cause and explain it simply.",
                  color: "bg-orange-50 text-orange-600",
                  hover: "group-hover:bg-orange-600"
                },
                {
                  icon: <PiWrenchFill />,
                  title: "Factory Standards",
                  desc: "Our repairs follow the exact specifications of the original manufacturer to ensure long-term reliability.",
                  color: "bg-slate-950 text-white",
                  hover: "group-hover:bg-white group-hover:text-slate-950"
                }
              ].map((val, idx) => (
                <div key={idx} className="group p-12 rounded-[50px] border border-slate-100 bg-white flex flex-col items-center text-center space-y-8 hover:border-orange-500/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-700" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className={`w-24 h-24 rounded-[32px] ${val.color} flex items-center justify-center text-5xl transition-all duration-500 ${val.hover} group-hover:text-white group-hover:scale-110`}>
                    {val.icon}
                  </div>
                  <h4 className="text-[26px] font-black text-slate-950">{val.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium text-[16px]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner - Glassmorphism style */}
      <section className="py-32 relative group overflow-hidden mx-5 md:mx-8 mb-32 rounded-[60px]" data-aos="zoom-in">
        <div className="absolute inset-0">
          <img src="/banner/main-slider-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-[1800px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[40px] md:text-[64px] font-black text-white tracking-tight leading-tight mb-20">
              A Commitment To <span className="text-orange-500">Excellence</span> <br className="hidden md:block" /> That Never Wavers.
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="space-y-8 bg-white/5 p-12 rounded-[50px] border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
                  <FiTarget size={32} />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-widest">Our Vision</h4>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  To become the most trusted home service provider in the region by delivering unmatched technical expertise and transparent communication.
                </p>
              </div>
              <div className="space-y-8 bg-white/5 p-12 rounded-[50px] border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white">
                  <FiHeart size={32} />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-widest">Our Mission</h4>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  To extend the lifecycle of your household investments through precision repairs and proactive maintenance, saving you money.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <button
                onClick={() => openBookingModal()}
                className="px-12 py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-[14px] hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 flex items-center gap-4 mx-auto"
              >
                Schedule Your Repair Now <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-[32px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight italic">
              "We don't just want to fix your appliance; we want to earn your trust so you never have to worry about home repairs again."
            </p>
            <div className="pt-8">
              <p className="text-xl font-black text-orange-500 uppercase tracking-widest">The My Appliancerescue Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
