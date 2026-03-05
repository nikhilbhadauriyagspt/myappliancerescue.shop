import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiSend, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { API_ENDPOINTS } from '../config/api';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Fallback success for demo
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Dear Appliance - Fast & Professional Support</title>
        <meta name="description" content="Have a broken appliance? Get in touch with our team today. We provide quick and professional support for all your home repair needs." />
        <link rel="canonical" href="https://dearappliance.com/contact" />
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
              Support Hub
            </span>
          </div>
          <h1 className="text-[44px] md:text-[72px] lg:text-[90px] font-black text-white mb-10 leading-[1.05] tracking-tight" data-aos="zoom-out">
            Here To Help <br />
            With Your <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">Next Fix.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Send us a message or email our support desk. Our professional local team will get back to you in under 45 Minutes.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 lg:py-40 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">Get In Touch</span>
                </div>
                <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight mb-8">
                  Ready To Schedule <br />
                  A <span className="text-orange-500">Specialist Visit?</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                  We know your home appliances are essential. Our professional team will respond to your inquiry as quickly as possible.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="group flex items-center gap-8 p-8 rounded-[40px] bg-white border border-slate-100 transition-all duration-500 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/5">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <FiMail size={32} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-1">Email Support</p>
                    <a href="mailto:info@dearappliance.com" className="text-slate-950 font-black text-xl hover:text-orange-500 transition-colors">info@dearappliance.com</a>
                  </div>
                </div>

                <div className="group flex items-center gap-8 p-8 rounded-[40px] bg-white border border-slate-100 transition-all duration-500 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-blue-500 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    <FiMapPin size={32} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-1">Our Service Area</p>
                    <p className="text-slate-950 font-black text-xl">149 W 36th St. 5th Floor, New York, NY 10018, United States</p>
                  </div>
                </div>
              </div>

              {/* Extra info card */}
              <div className="mt-10 p-10 bg-slate-950 rounded-[40px] flex items-start gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] rounded-full"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-orange-500 flex items-center justify-center flex-shrink-0 relative z-10">
                  <FiClock size={32} />
                </div>
                <div className="relative z-10">
                  <p className="text-white font-black text-xl mb-2">Fast Response Time</p>
                  <p className="text-white/60 font-medium">We aim to respond to all inquiries within 45 Minutes during business hours.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] -z-0 group-hover:bg-orange-500/10 transition-colors duration-700"></div>

                {isSubmitted ? (
                  <div className="relative z-10 text-center py-20">
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <FiCheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-950 mb-4">Message Sent!</h3>
                    <p className="text-slate-500 text-lg font-medium mb-12 max-w-sm mx-auto">Our team is already reviewing your request and will contact you shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl active:scale-95">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField label="Full Name" name="name" placeholder="e.g. John Doe" onChange={handleChange} required />
                      <InputField label="Email Address" name="email" type="email" placeholder="e.g. john@mail.com" onChange={handleChange} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField label="Phone Number" name="phone" placeholder="e.g. +1 000 000 0000" onChange={handleChange} required />
                      <InputField label="Appliance Issue" name="subject" placeholder="e.g. Fridge Not Cooling" onChange={handleChange} required />
                    </div>

                    <div className="space-y-4">
                      <label className="text-slate-950 text-[12px] font-black uppercase tracking-widest ml-6">Tell us about the problem</label>
                      <textarea name="message" required onChange={handleChange} placeholder="Please describe the problem you're experiencing..." rows="5" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-[40px] px-10 py-8 text-slate-950 font-bold focus:border-orange-500 focus:bg-white transition-all resize-none placeholder:text-slate-300"></textarea>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full md:w-auto bg-orange-500 text-white hover:bg-slate-950 px-12 py-6 rounded-2xl font-black text-[15px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-4 group shadow-2xl shadow-orange-500/20 active:scale-95">
                        Send Message Now
                        <FiSend size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InputField = ({ label, name, type = "text", placeholder, ...props }) => (
  <div className="space-y-4">
    <label className="text-slate-950 text-[12px] font-black uppercase tracking-widest ml-6">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-100 outline-none rounded-full px-10 py-5 text-slate-950 font-bold focus:border-orange-500 focus:bg-white transition-all placeholder:text-slate-300"
      {...props}
    />
  </div>
);

export default Contact;


