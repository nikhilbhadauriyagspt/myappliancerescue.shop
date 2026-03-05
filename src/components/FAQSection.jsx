import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openBookingModal } = useBooking();

  const faqs = [
    {
      q: "How fast can you repair my appliance?",
      a: "We offer same-day repair services for most calls received before noon. Our goal is to resolve your appliance issues within 24 hours."
    },
    {
      q: "Do you provide a warranty on repairs?",
      a: "Yes, all our repair services come with a professional warranty on both parts and labor, ensuring your peace of mind and satisfaction."
    },
    {
      q: "Are your technicians certified?",
      a: "Every member of our team is fully certified, background-checked, and highly experienced in repairing all major appliance brands and models."
    },
    {
      q: "Do you use original spare parts?",
      a: "We exclusively use genuine, manufacturer-approved parts to ensure the longevity and peak performance of your household appliances."
    },
    {
      q: "How much does a service call cost?",
      a: "We provide upfront, transparent pricing. Our service call fee is applied toward the total cost of your repair, so you never pay twice."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.2em]">Got Questions?</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight mb-8">
              Everything You <br /> Need To <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Know.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm mb-10">
              Can't find what you're looking for? Reach out to our support team for immediate assistance.
            </p>

            <div className="bg-slate-950 p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] rounded-full"></div>
              <h4 className="text-white text-2xl font-black mb-4 relative z-10">Still Have Questions?</h4>
              <p className="text-white/60 font-medium mb-8 relative z-10">We're here to help you get your home back in order.</p>
              <button
                onClick={() => openBookingModal()}
                className="relative z-10 w-full py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white hover:text-slate-950 transition-all duration-500"
              >
                Ask A Expert
              </button>
            </div>
          </div>

          <div className="space-y-4" data-aos="fade-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`group border rounded-[32px] transition-all duration-500 ${activeIndex === idx
                  ? "bg-white border-orange-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
                  : "bg-transparent border-slate-200 hover:border-slate-300"
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
                >
                  <span className={`text-xl md:text-2xl font-black transition-colors duration-500 ${activeIndex === idx ? "text-orange-500" : "text-slate-950 group-hover:text-orange-500"
                    }`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === idx ? "bg-orange-500 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-950 group-hover:text-white"
                    }`}>
                    {activeIndex === idx ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="p-8 md:p-10 pt-0 border-t border-slate-50">
                    <p className="text-slate-500 text-[17px] font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;
