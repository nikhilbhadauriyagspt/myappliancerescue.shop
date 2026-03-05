import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';
import { FiSend, FiMail, FiMapPin, FiPhoneCall, FiCheckCircle } from 'react-icons/fi';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="contact">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full -ml-40 -mb-40"></div>

      <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-orange-50 px-5 py-2 rounded-full border border-orange-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.2em]">Get In Touch</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight mb-8">
                Ready To Fix Your <br />
                <span className="text-orange-500">Appliances?</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                Don't let a broken appliance ruin your day. Our local experts are ready to help you within 2 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="group flex items-center gap-8 p-8 rounded-[40px] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/5">
                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <FiMail size={32} />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-1">Email Support</p>
                  <a href="mailto:info@dearappliance.com" className="text-slate-950 font-black text-xl hover:text-orange-500 transition-colors">info@dearappliance.com</a>
                </div>
              </div>

              <div className="group flex items-center gap-8 p-8 rounded-[40px] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-blue-500 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <FiMapPin size={32} />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-1">Our Service Area</p>
                  <p className="text-slate-950 font-black text-xl">149 W 36th St. 5th Floor, New York, NY 10018, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden group">
              {/* Soft decorative blur */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] -z-0 group-hover:bg-orange-500/10 transition-colors duration-700"></div>

              {isSubmitted ? (
                <div className="relative z-10 text-center py-20">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <FiCheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4">Message Sent!</h3>
                  <p className="text-slate-500 text-lg font-medium mb-12 max-w-sm mx-auto">Our specialized technician will contact you within the next 15-30 minutes.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Full Name"
                      name="name"
                      placeholder="e.g. John Doe"
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="e.g. john@mail.com"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Phone Number"
                      name="phone"
                      placeholder="e.g. +1 234 567 890"
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Appliance / Issue"
                      name="subject"
                      placeholder="e.g. Refrigerator Leak"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-slate-950 text-[12px] font-black uppercase tracking-widest ml-6">Tell us about the problem</label>
                    <textarea
                      name="message"
                      required
                      onChange={handleChange}
                      placeholder="Describe the issue in detail..."
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-100 outline-none rounded-[40px] px-10 py-8 text-slate-950 font-bold focus:border-orange-500 focus:bg-white transition-all resize-none placeholder:text-slate-300"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-orange-500 text-white hover:bg-slate-950 px-12 py-6 rounded-2xl font-black text-[15px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-4 group shadow-2xl shadow-orange-500/20 active:scale-95">
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

export default ContactSection;


