import React, { useEffect, useState, useMemo } from "react";
import { useBooking } from "../context/BookingContext";
import { API_ENDPOINTS } from "../config/api";
import { servicesData } from "../data/services";
import { FiCheckCircle, FiShield, FiClock, FiStar, FiChevronRight } from "react-icons/fi";

const rotatingTexts = [
  {
    title: "Expert Appliance",
    title2: "Repair Services",
    desc: "Fast, reliable, and affordable repairs for all your home appliances. Our certified technicians are ready to help.",
    bg: "/banner/hero-bg.jpg"
  },
  {
    title: "Washing Machine",
    title2: "& Dryer Fix",
    desc: "Don't let laundry pile up. We provide same-day repair services for all major washing machine and dryer brands.",
    bg: "/banner/hero-1.jpg"
  },
  {
    title: "Refrigerator &",
    title2: "Freezer Repair",
    desc: "Keep your food fresh. Our experts diagnose and fix cooling issues, leaks, and electrical problems quickly.",
    bg: "/banner/hero-2.jpg"
  },
  {
    title: "Kitchen Range",
    title2: "& Oven Service",
    desc: "Get back to cooking your favorite meals. We specialize in repairing stoves, ovens, and kitchen chimneys.",
    bg: "/banner/hero-3.jpg"
  },
  {
    title: "Air Conditioner",
    title2: "Maintenance",
    desc: "Stay cool all summer long. Professional AC repair, gas filling, and deep cleaning services at your doorstep.",
    bg: "/banner/hero-bg.jpg"
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();
  const [quoteOpen, setQuoteOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: '',
    location: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.BOOKING, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', appliance: '', location: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentText = rotatingTexts[currentIndex];

  const trustBadges = [
    { icon: <FiClock className="text-orange-500" />, text: "Same Day Service" },
    { icon: <FiShield className="text-orange-500" />, text: "Certified Experts" },
    { icon: <FiStar className="text-orange-500" />, text: "Top Rated" }
  ];

  return (
    <section className="relative min-h-[850px] lg:h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-center rounded-b-[100px]">
      {/* Dynamic Background Slider */}
      {rotatingTexts.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-40" : "opacity-0"
            }`}
        >
          <img
            src={item.bg}
            alt=""
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 md:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* Left Content Area */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8" data-aos="fade-right">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">
                Your Trusted Neighborhood Repair Team
              </span>
            </div>

            <div className={`transition-all duration-700 transform ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <h1 className="text-white font-black leading-[1.05] tracking-tight mb-8">
                <span className="block text-[42px] md:text-[64px] lg:text-[72px] xl:text-[84px] drop-shadow-2xl">
                  {currentText.title}
                </span>
                <span className="block text-[42px] md:text-[64px] lg:text-[72px] xl:text-[84px] text-orange-500 drop-shadow-2xl">
                  {currentText.title2}
                </span>
              </h1>

              <p className="text-white/70 text-[16px] md:text-[20px] leading-relaxed max-w-2xl mb-10 font-medium">
                {currentText.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl px-5 py-3 transition-transform hover:scale-105">
                  {badge.icon}
                  <span className="text-white font-bold text-sm tracking-wide">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={() => openBookingModal()}
                className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-orange-500 text-white font-black text-[15px] uppercase tracking-wider shadow-[0_20px_40px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
              >
                Our Services
                <FiChevronRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 font-black text-[15px] uppercase tracking-wider hover:bg-white hover:text-slate-950 transition-all shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: Quote Form Area */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:pl-10">
            <div
              className={`relative transition-all duration-1000 delay-300 ${quoteOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"}`}
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-8 md:p-10 border border-white/20 relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-colors" />

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheckCircle className="text-4xl text-orange-500" />
                    </div>
                    <h3 className="text-white text-2xl font-black mb-3">Request Sent!</h3>
                    <p className="text-white/60 text-sm font-medium">Our team will call you back within 15 minutes.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h3 className="text-white text-[28px] md:text-[32px] font-black tracking-tight mb-2">
                        Get A <span className="text-orange-500">Free</span> Quote
                      </h3>
                      <p className="text-white/60 text-[14px] font-medium">
                        Average response time: <span className="text-orange-500">15 mins</span>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                      <div className="grid grid-cols-2 gap-4">
                        <InputField name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" required />
                        <InputField name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
                      </div>

                      <div className="relative">
                        <select
                          name="appliance"
                          value={formData.appliance}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 text-white placeholder:text-white/40 text-[14px] font-bold outline-none py-4 px-6 rounded-2xl border border-white/10 focus:border-orange-500 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-900">Choose Service</option>
                          {servicesData.map(s => (
                            <option key={s.id} value={s.title} className="bg-slate-900">{s.title}</option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                          <FiChevronRight className="rotate-90" />
                        </div>
                      </div>

                      <InputField name="location" value={formData.location} onChange={handleChange} placeholder="Service Location" required />

                      <button
                        type="submit"
                        className="w-full py-5 mt-4 rounded-2xl bg-orange-500 text-white font-black text-[15px] uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-[0_15px_30px_rgba(249,115,22,0.3)] active:scale-95"
                      >
                        Submit Request
                      </button>
                      <p className="text-center text-white/40 text-[11px] font-bold uppercase tracking-tighter">
                        Privacy Protected & Secured
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

function InputField({ placeholder, type = "text", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/5 text-white placeholder:text-white/30 text-[14px] font-bold outline-none py-4 px-6 rounded-2xl border border-white/10 focus:border-orange-500 focus:bg-white/10 transition-all"
      {...props}
    />
  );
}

export default Hero;
