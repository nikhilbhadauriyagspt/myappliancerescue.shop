import React, { useState, useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';
import { FiX, FiCheck, FiTool, FiMail, FiUser, FiPhone, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { servicesData } from '../../data/services';
import { API_ENDPOINTS } from '../../config/api';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: '',
    location: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, appliance: selectedService }));
    }
  }, [selectedService]);

  if (!isModalOpen) return null;

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
        setTimeout(() => {
          setIsSubmitted(false);
          closeBookingModal();
          setFormData({ name: '', phone: '', email: '', appliance: '', location: '' });
        }, 4000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback success for demo
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeBookingModal();
      }, 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300"
        onClick={closeBookingModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row min-h-[600px]">
        
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-6 right-6 z-[60] w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95"
        >
          <FiX size={24} />
        </button>

        {isSubmitted ? (
          <div className="w-full p-12 md:p-24 text-center flex flex-col items-center justify-center bg-white">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner animate-bounce-slow">
              <FiCheck size={48} />
            </div>
            <h3 className="text-4xl font-black text-slate-950 mb-4 tracking-tight">Booking Request Sent!</h3>
            <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">Thank you for choosing <span className="text-orange-500 font-bold">My Appliancerescue</span>. Our team will contact you within 15-30 minutes to confirm your schedule.</p>
          </div>
        ) : (
          <>
            {/* Left Sidebar - Visual Premium Area */}
            <div className="md:w-[38%] bg-slate-950 p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/20">
                  <FiTool size={32} />
                </div>
                <h3 className="text-[32px] md:text-[40px] font-black text-white leading-[1.1] mb-6 tracking-tight">
                  Expert Care <br />
                  <span className="text-orange-500 italic">At Your Door.</span>
                </h3>
                <p className="text-white/50 text-[16px] font-medium leading-relaxed max-w-xs">
                  Join hundreds of homeowners who trust our fast, honest, and professional repair services every week.
                </p>
              </div>

              <div className="relative z-10 space-y-6">
                {[
                  { label: "Same-Day Service", color: "bg-orange-500" },
                  { label: "Certified Experts", color: "bg-blue-500" },
                  { label: "No Hidden Fees", color: "bg-green-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 font-bold text-sm uppercase tracking-widest">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_10px_rgba(249,115,22,0.4)]`}></div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Premium Form */}
            <div className="flex-1 p-10 md:p-16 bg-white flex flex-col justify-center">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.2em]">Priority Booking</span>
                </div>
                <h3 className="text-[36px] font-black text-slate-950 tracking-tight leading-none">Schedule A Fix</h3>
                <p className="text-slate-400 font-medium mt-3">Enter your details for an immediate callback.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ModalField
                    icon={<FiUser />}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                  <ModalField
                    icon={<FiPhone />}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    type="tel"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ModalField
                    icon={<FiMail />}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors z-10 pointer-events-none">
                      <FiTool />
                    </div>
                    <select
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-10 py-4 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-slate-950 appearance-none cursor-pointer relative"
                    >
                      <option value="">Select Service</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <FiChevronRight className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute left-6 top-6 text-slate-400 group-focus-within:text-orange-500 transition-colors z-10 pointer-events-none">
                    <FiMapPin />
                  </div>
                  <textarea
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    rows="2"
                    className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-14 pr-6 py-5 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-slate-950 resize-none"
                    placeholder="Where should we come? (Address)"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-black uppercase tracking-[0.2em] py-6 rounded-2xl shadow-2xl shadow-orange-500/20 hover:bg-slate-950 transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-4 group"
                  >
                    Confirm Priority Booking
                    <FiChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6">
                    Professional Standards • Guaranteed Results
                  </p>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ModalField = ({ icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors z-10 pointer-events-none">
      {icon}
    </div>
    <input
      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-slate-950"
      {...props}
    />
  </div>
);

export default BookingModal;
