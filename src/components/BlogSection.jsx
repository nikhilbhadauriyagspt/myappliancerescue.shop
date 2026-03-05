import React from 'react';
import { blogsData } from '../data/blogs';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="blog">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-5 py-2 rounded-full border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em]">Latest Updates</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-black text-slate-950 leading-[1.1] tracking-tight">
              Maintenance <span className="text-orange-500">Tips & News.</span>
            </h2>
          </div>
          <div data-aos="fade-left">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-4 px-10 py-5 bg-slate-50 text-slate-950 font-black text-[14px] uppercase tracking-widest rounded-2xl hover:bg-slate-950 hover:text-white transition-all duration-500 group"
            >
              <span>View All Articles</span>
              <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogsData.slice(0, 3).map((blog, idx) => (
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
                   <span className="text-[11px] font-black text-slate-950 uppercase tracking-widest">{blog.category || 'Repair'}</span>
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
                    <FiUser className="text-orange-500" />
                    <span>By Admin</span>
                  </div>
                </div>

                <h3 className="text-[24px] md:text-[28px] font-black text-slate-950 mb-4 leading-tight group-hover:text-orange-500 transition-colors duration-500">
                  <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-slate-500 font-medium leading-relaxed line-clamp-2 mb-8 flex-1">
                  {blog.excerpt}
                </p>

                <div className="pt-8 border-t border-slate-50 flex items-center">
                   <Link 
                     to={`/blog/${blog.id}`}
                     className="inline-flex items-center gap-3 text-slate-950 font-black text-[13px] uppercase tracking-[0.15em] hover:text-orange-500 transition-colors group/btn"
                   >
                     <span>Read Full Article</span>
                     <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all duration-500">
                        <FiArrowRight size={18} />
                     </div>
                   </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
