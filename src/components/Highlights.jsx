import { FiClock, FiShield, FiTag } from "react-icons/fi";

const Features = () => {
  const items = [
    {
      icon: <FiClock className="text-[26px] text-orange-500" />,
      title: "Same Day Service",
      desc: "We provide fast and reliable same-day appliance repair services to ensure your home routine is back to normal as quickly as possible.",
    },
    {
      icon: <FiShield className="text-[26px] text-orange-500" />,
      title: "Certified Experts",
      desc: "Our team consists of highly skilled and certified technicians who specialize in repairing all major brands and models of home appliances.",
    },
    {
      icon: <FiTag className="text-[26px] text-orange-500" />,
      title: "Affordable Pricing",
      desc: "We offer transparent, upfront pricing with no hidden fees, providing you with high-quality repair services that fit your budget.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#ff7a18] to-[#ff4e00] py-36 pt-60 -mt-24">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-6 text-white">

              {/* Icon Box */}
              <div className="w-[70px] h-[70px] bg-white rounded-2xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[22px] font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-[14px] leading-relaxed max-w-[320px]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;