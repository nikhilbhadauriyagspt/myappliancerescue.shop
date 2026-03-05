import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FiArrowRight, FiCalendar, FiBookOpen, FiUser } from 'react-icons/fi';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Blog | Dear Appliance - Repair Tips & Guides</title>
        <meta name="description" content="Helpful tips for maintaining your home appliances. Learn how to keep your fridges, washing machines, and ACs running longer." />
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
              Maintenance Hub
            </span>
          </div>
          <h1 className="text-[44px] md:text-[72px] lg:text-[90px] font-black text-white mb-10 leading-[1.05] tracking-tight" data-aos="zoom-out">
            Helpful Tips For <br />
            Your <span className="text-orange-500 italic underline decoration-white/10 underline-offset-[12px]">Appliance Care.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Stay updated with our expert advice on how to keep your home appliances running smoothly and prevent common issues.
          </p>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-24 lg:py-40 bg-slate-50/50">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {blogsData.map((blog, idx) => (
              <article
                key={blog.id}
                className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 transition-all duration-700 hover:border-orange-500/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Image Box */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={blog.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-xl">
                    <span className="text-[11px] font-black text-slate-950 uppercase tracking-widest">{blog.category || 'Maintenance'}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-6 mb-6 text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-orange-500" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBookOpen className="text-orange-500" />
                      <span>5 Min Read</span>
                    </div>
                  </div>

                  <h3 className="text-[26px] md:text-[32px] font-black text-slate-950 mb-6 leading-tight group-hover:text-orange-500 transition-colors duration-500">
                    <Link to={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 mb-10 flex-1 text-lg">
                    {blog.shortDesc}
                  </p>

                  <div className="pt-8 border-t border-slate-50 flex items-center">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-3 text-slate-950 font-black text-[13px] uppercase tracking-[0.15em] hover:text-orange-500 transition-colors group/btn"
                    >
                      <span>Read Full Article</span>
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all duration-500">
                        <FiArrowRight size={20} />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Banner - Modern Premium */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div className="absolute inset-0">
              <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/10 mb-8 text-orange-500 font-black text-[11px] uppercase tracking-[0.3em]">
                Stay Updated
              </div>

              <h3 className="text-[36px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-4xl mb-12">
                Want Our Latest <br />
                <span className="text-orange-500 italic underline decoration-white/10 underline-offset-8">Repair Guides?</span>
              </h3>

              <div className="flex flex-col md:flex-row max-w-2xl mx-auto w-full items-center p-2 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-none text-white text-lg px-8 py-4 focus:ring-0 w-full outline-none placeholder:text-slate-500 font-bold"
                />
                <button className="bg-orange-500 text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-950 transition-all w-full md:w-auto shadow-xl">
                  Join Hub
                </button>
              </div>

              <p className="text-white/40 font-black text-[11px] uppercase tracking-[0.5em] mt-12">No Spam. Only Expert Advice.</p>
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

export default Blog;

