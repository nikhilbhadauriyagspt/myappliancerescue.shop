import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData as blogs } from '../data/blogs';
import { FiCalendar, FiBookOpen, FiArrowLeft, FiTag, FiClock } from 'react-icons/fi';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center">
          <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-bold uppercase tracking-widest text-sm">Article Not Found</p>
          <Link to="/blog" className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{blog.title} | Dear Appliance Blog</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      {/* Page Hero Section - Modern Dark Premium */}
      <section className="relative pt-[200px] pb-32 bg-slate-950 overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-10 text-white/80 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all group"
          >
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform text-orange-500" /> Back to Articles
          </Link>
          <h1 className="text-[36px] md:text-[60px] lg:text-[72px] font-black text-white mb-10 max-w-5xl mx-auto leading-[1.1] tracking-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-[12px] font-black uppercase tracking-[3px]">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-orange-500" /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <FiTag className="text-orange-500" /> {blog.category || 'Maintenance'}
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-orange-500" /> 5 Min Read
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 lg:py-40 bg-white relative z-20">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Featured Image - No Heavy Shadows */}
            <div className="relative rounded-[50px] overflow-hidden mb-20 border border-slate-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover max-h-[700px] transform hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Article Content - Simple & Clean */}
            <div className="prose prose-xl max-w-none text-slate-600 font-medium leading-[1.8] space-y-10 
              prose-headings:text-slate-950 prose-headings:font-black prose-headings:tracking-tight 
              prose-p:mb-8 prose-strong:text-slate-950 prose-strong:font-black
              prose-ul:list-disc prose-ul:pl-6 prose-li:mb-4
              prose-img:rounded-[40px] prose-img:border prose-img:border-slate-100">
              <div dangerouslySetInnerHTML={{ __html: blog.longDesc }} />
            </div>

            {/* Bottom Footer Section for Blog */}
            <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6">
                <span className="text-slate-950 font-black text-[11px] uppercase tracking-[0.2em]">Article Tags:</span>
                <div className="flex gap-3">
                  {["Repair", "Maintenance"].map(tag => (
                    <span key={tag} className="px-6 py-2 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100 hover:bg-orange-500 hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/blog"
                className="group flex items-center gap-4 text-slate-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-orange-500 transition-all"
              >
                Explore More Articles <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA Banner - Modern Premium */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img src="/banner/hero-bg.jpg" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-8 py-24 flex flex-col items-center text-center">
              <h3 className="text-[32px] md:text-[56px] font-black text-white leading-tight tracking-tight max-w-4xl mb-12">
                Need Professional Help With Your <span className="text-orange-500 italic underline decoration-white/10 underline-offset-8">Appliance?</span>
              </h3>

              <Link
                to="/contact"
                className="px-12 py-6 bg-orange-500 text-white font-black uppercase tracking-widest text-[14px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
              >
                Book A Specialist Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

