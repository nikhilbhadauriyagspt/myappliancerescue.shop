import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiMapPin,
  FiClock,
  FiPhoneCall,
  FiChevronDown,
  FiSearch,
  FiMail,
} from "react-icons/fi";
import { servicesData } from "../data/services.js";
import { useBooking } from "../context/BookingContext";

const Header = () => {
  const location = useLocation();
  const { openBookingModal } = useBooking();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setShowSearchResults(false);
    setSearchQuery("");
  }, [location.pathname]);

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return servicesData.filter((s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // KEEP YOUR LINKS SAME (as you requested)
  const nav = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Services", to: "/services", isServices: true },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  return (
    <div className="fixed top-0 left-0 w-full z-[300]">
      {/* Top Info Bar (same vibe as screenshot) */}
      <div className="hidden lg:block bg-white border-b border-slate-100">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="h-[70px] flex items-center justify-between">
            {/* Left: Location + Working Hours */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-orange-50 grid place-items-center">
                  <FiMapPin className="text-orange-500 text-[18px]" />
                </span>
                <div className="leading-tight">
                  <div className="text-[12px] font-extrabold text-slate-900">Location:</div>
                  <div className="text-[12px] text-slate-600">
                    30 W Lake St, Addison, IL 60101, United States
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-orange-50 grid place-items-center">
                  <FiClock className="text-orange-500 text-[18px]" />
                </span>
                <div className="leading-tight">
                  <div className="text-[12px] font-extrabold text-slate-900">Working Hours:</div>
                  <div className="text-[12px] text-slate-600">
                    Mon-Fri: 7:00am-7:00pm, Sat-Sun: 10:00am-5:00pm
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Support pill (Now Mail) */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
                <span className="w-9 h-9 rounded-full bg-orange-500 grid place-items-center">
                  <FiMail className="text-white text-[18px]" />
                </span>
                <div className="leading-tight">
                  <div className="text-[12px] font-extrabold text-orange-600">
                    Mail Us For Support:
                  </div>
                  <div className="text-[12px] text-slate-700 font-semibold">
                    <a href="mailto:info@myappliancerescue.shop" className="hover:text-orange-500 transition">
                      info@myappliancerescue.shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <header className="bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="h-[86px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo/logo.png"
                alt="Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav - centered like screenshot */}
            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((item) => {
                if (item.isServices) {
                  const active =
                    location.pathname.startsWith("/services") ||
                    location.pathname.startsWith("/service/");
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={item.to}
                        className={`text-[13px] font-extrabold uppercase tracking-wide inline-flex items-center gap-2 transition ${active ? "text-orange-500" : "text-slate-900 hover:text-orange-500"
                          }`}
                      >
                        {item.label}
                        <FiChevronDown className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
                      </Link>

                      {/* Dropdown (simple like screenshot) */}
                      <div
                        className={`absolute top-full left-0 pt-4 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                          }`}
                      >
                        <div className="w-[320px] bg-white rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden">
                          <div className="max-h-[320px] overflow-y-auto p-2">
                            {(servicesData || []).map((s) => (
                              <Link
                                key={s.id || s.slug || s.title}
                                to={`/service/${s.slug}`}
                                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-orange-50 transition"
                              >
                                <span className="text-[13px] font-semibold text-slate-800">
                                  {s.title}
                                </span>
                                <span className="text-[12px] text-slate-400">→</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[13px] font-extrabold uppercase tracking-wide text-slate-900 hover:text-orange-500 transition"
                    >
                      {item.label}
                    </a>
                  );
                }

                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-[13px] font-extrabold uppercase tracking-wide transition ${active ? "text-orange-500" : "text-slate-900 hover:text-orange-500"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search + Button (like screenshot) */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Services..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-[320px] h-[44px] pl-5 pr-12 rounded-full bg-slate-50 border border-slate-200 outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 focus:border-orange-200"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 grid place-items-center hover:border-orange-200 hover:bg-orange-50 transition"
                  aria-label="Search"
                >
                  <FiSearch className="text-slate-900" />
                </button>

                {/* Search Results Dropdown */}
                {showSearchResults && searchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden z-[400]">
                    <div className="max-h-[320px] overflow-y-auto p-2">
                      {filteredServices.length > 0 ? (
                        filteredServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/service/${s.slug}`}
                            onClick={() => {
                              setShowSearchResults(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition"
                          >
                            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                              <FiSearch size={16} />
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-slate-800">
                                {s.title}
                              </div>
                              <div className="text-[11px] text-slate-500 truncate w-[200px]">
                                {s.shortDesc}
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center text-slate-500 text-[13px]">
                          No services found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => openBookingModal()}
                className="h-[44px] px-6 rounded-full bg-orange-500 text-white text-[12px] font-extrabold uppercase tracking-wide hover:bg-orange-600 transition shadow"
              >
                Get A Schedule
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-orange-500 text-white grid place-items-center shadow"
              aria-label="Open Menu"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[500] lg:hidden transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white text-slate-900 p-6 transition-transform duration-500 ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-6">
            <img src="/logo/logo.png" alt="Logo" className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center"
              aria-label="Close Menu"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl bg-slate-50 hover:bg-orange-50 transition font-bold">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-3 rounded-xl bg-slate-50 hover:bg-orange-50 transition font-bold">
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen((p) => !p)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-orange-50 transition font-bold"
            >
              <span>Services</span>
              <FiChevronDown className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 max-h-[260px] overflow-y-auto rounded-xl bg-slate-50 p-2 space-y-1 border border-slate-100">
                {(servicesData || []).map((s) => (
                  <Link
                    key={s.id || s.slug || s.title}
                    to={`/service/${s.slug}`}
                    className="block px-3 py-2 rounded-lg hover:bg-orange-50 transition text-[14px] font-semibold text-slate-700"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact" className="block px-4 py-3 rounded-xl bg-slate-50 hover:bg-orange-50 transition font-bold">
              Contact
            </Link>
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              openBookingModal();
            }}
            className="mt-6 w-full py-4 rounded-full bg-orange-500 text-white font-extrabold uppercase tracking-wide"
          >
            Get A Schedule
          </button>

          {/* Mobile top info (optional but matches screenshot content) */}
          <div className="mt-6 border-t border-slate-100 pt-5 space-y-3 text-[13px]">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 text-orange-500" />
              <div>
                <div className="font-extrabold">Location</div>
                <div className="text-slate-600">30 W Lake St, Addison, IL 60101, United States</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiClock className="mt-0.5 text-orange-500" />
              <div>
                <div className="font-extrabold">Working Hours</div>
                <div className="text-slate-600">Mon-Fri: 7:00am-7:00pm, Sat-Sun: 10:00am-5:00pm</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMail className="mt-0.5 text-orange-500" />
              <div>
                <div className="font-extrabold">Mail Us</div>
                <a href="mailto:info@myappliancerescue.shop" className="text-slate-600 hover:text-orange-500 transition">
                  info@myappliancerescue.shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so fixed header doesn't overlap page */}
      <div className="h-[86px] lg:h-[156px]" />
    </div>
  );
};

export default Header;